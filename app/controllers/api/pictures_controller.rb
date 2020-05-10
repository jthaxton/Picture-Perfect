require "aws-sdk-s3"
class Api::PicturesController < ApplicationController
  def index
    @pictures = Picture.with_attached_photo.includes(:user, :comments, :photo_attachment)
    @comments = Comment.includes(:user)
    
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
      render json: @picture
    else
      render json: @picture.errors.full_messages
    end
  end

  def destroy
    picture = current_user.pictures.detect {|pic| pic.id == params[:id].to_i}
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
