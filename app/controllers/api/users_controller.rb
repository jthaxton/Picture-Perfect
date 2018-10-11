class Api::UsersController < ApplicationController
  def create

    @user = User.new(user_params)

    if @user.save
      signin(@user)
      render '/api/users/show'
    else
      render json: ['need to log in'], status: 404
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
