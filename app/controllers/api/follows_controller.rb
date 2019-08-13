class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follower_id: current_user.id, followee_id: params[:id])
    @follow.save
    render json: @follow
    
  end

  def index
    @follows = Follow.all
  end

  def destroy 
    @follow = Follow.find_by_id(params[:id])
    @follow.destroy
    render json: @follow
  end 

end
