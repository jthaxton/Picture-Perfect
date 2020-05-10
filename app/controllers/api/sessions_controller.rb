class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      signin(@user)
      render json: current_user, serializer: UserSerializer
    else
      render json: {status: 402}
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['No Current User'], status: 404
    end
  end
end
