class Api::FollowsController < ApplicationController
  def create
    follow = Follow.new(follower_id: current_user.id, followee_id: params[:id].to_i)
    follow.save
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

  def index
    @follows = Follow.all
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy!
    render json: @follow
  end
end
