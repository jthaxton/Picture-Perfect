class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follower_id: current_user.id, followee_id: params[:id].to_i)
    @follow.save
    render json: current_user, serializer: DiscoverFeedSerializer
  end

  def index
    @follows = Follow.all
  end

  def destroy
    @follow = Follow.find_by_followee_id(params[:id].to_i)
    @follow.destroy
    render json: current_user, serializer: DiscoverFeedSerializer
  end
end
