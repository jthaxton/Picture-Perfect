class Api::FollowsController < ApplicationController
  def create

    @follow = Follow.new(follower_id: current_user.id, followee_id: params[:user][:id])
    @follow.save
  end

  def index
    @follows = Follow.all
  end

end
