class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      signin(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Credentials'], status: 402
    end
end

  def destroy
    if current_user
      logout
      render json: ['YOU ARE LOGGED OUT']
    else
      render json: ['No Current User'], status: 404
    end
  end
end
