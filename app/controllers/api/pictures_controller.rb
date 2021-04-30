require "aws-sdk-s3"
class Api::PicturesController < ApplicationController
  def index
    render json: current_user, serializer: FeedSerializer
  end

  def show
    @picture = Picture.find_by_id(params[:id])
    render :show
  end

  def create
    @picture = Picture.new(user_id: current_user.id, body: params[:picture][:body])
    @picture.photo.attach(io: params[:picture][:photo], filename: "test", content_type: "image/jpg")
    if @picture.save!
      render json: current_user, serializer: FeedSerializer
    else
      render json: @picture.errors.full_messages
    end
  end

  def offset_index
    followed_pictures = []
    current_user.pictures.order(created_at: :desc).limit(params[:offset].to_i).map { |pic| followed_pictures << PictureSerializer.new(pic, current_user) }
    # current_user.pictures.offset(params[:offset].to_i).map {|pic| followed_pictures << PictureSerializer.new(pic)}
    remaining = current_user.pictures.order(created_at: :desc).limit(params[:offset].to_i + 1).length != followed_pictures.length
    render json: { followed_pictures: followed_pictures, next: remaining }
  end

  def offset_discover_index
    pictures = []

    # Follow.includes(:follower).where.not(follower_id: current_user.id)
    users = User.where.not(id: current_user.id)
    filtered_users = users.select { |user| !current_user.followees.include?(user) }
    filtered_users.each do |user|
      user.pictures.order(created_at: :desc).map { |pic| pictures << PictureSerializer.new(pic, current_user) }
    end
    filtered_pictures = pictures[0..params[:offset].to_i]
    remaining = filtered_pictures.length < pictures.length
    render json: { followed_pictures: filtered_pictures, next: remaining }
  end

  def discover_posts
    render json: current_user, serializer: DiscoverFeedSerializer
  end

  def own_pictures
    pictures = []
    current_user.pictures.order(created_at: :desc).limit(params[:offset].to_i).map { |pic| pictures << PictureSerializer.new(pic, current_user) }
    remaining = current_user.pictures.limit(params[:offset].to_i + 1).length != pictures.length
    render json: { followed_pictures: pictures, next: remaining }
  end

  def destroy
    picture = current_user.pictures.detect { |pic| pic.id == params[:id].to_i }
    if (current_user.prof_pic_id.nil? || current_user.prof_pic_id != picture.id) && picture.photo.attached?
      picture.photo.purge
      picture.destroy!
      render json: current_user, serializer: FeedSerializer
    elsif current_user.prof_pic_id.nil? || current_user.prof_pic_id != picture.id
      picture.destroy!
      render json: current_user, serializer: FeedSerializer
    end
  end

  private

  def picture_params
    params.require(:picture).permit(:photo, :body)
  end
end
