class Api::UsersController < ApplicationController
  before_action :require_login, only: [:index, :update, :show]
  def create
    @user = User.new(user_params)
    if @user.save
      signin(@user)
      render '/api/users/show'
      elsed
      render json: ['Choose different credentials'], status: 404
    end
  end

  def index
    @users = User.includes(:pictures, :follows, :comments)
  end

  def update
    @user = User.find_by_id(current_user.id)
    @user.update(prof_pic_id: params[:picture])
    render :update
  end

  def show
    @user = User.find_by_id(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
