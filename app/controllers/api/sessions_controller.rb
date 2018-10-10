class Api::SessionsController < ApplicationController
  def create
    if login(current_user)
      render
    else
      render json: ['Invalid Credentials'], state: 402
    end 
  end

  def destroy
    if logout
      render json: {}
    else
      render json: ['No Current User'], state: 404
    end
  end
end
