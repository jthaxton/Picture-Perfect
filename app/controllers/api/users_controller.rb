class Api::UsersController < ApplicationController
  def create

    @user = User.new(user_params)

    if @user.save
      signin(@user)
      render '/api/users/show'
    else
      render json: ['Choose different credentials'], status: 404
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find_by_id(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
