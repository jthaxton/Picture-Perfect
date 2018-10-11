class Api::UsersController < ApplicationController
  def create
    @user = User.new(params[:user][:username], params[:user][:password])
    if @user.save
      sign_in(@user)
    else
      nil
    end
  end
end
