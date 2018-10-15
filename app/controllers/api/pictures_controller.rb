class Api::PicturesController < ApplicationController

  def index
    @pictures = Picture.all
    render :index
  end

  def show
    @picture = Picture.find_by_id(params[:id])
    render :show
  end

  def create
    @picture = Picture.new(user_id: current_user.id)
    @picture.photo.attach(io: params[:picture][:photo], filename: "")
    if @picture.save
      render json: {message: 'good'}
    else
      render json: post.errors.full_messages
    end

  end

  def destroy
    debugger
    @picture = Picture.find_by_id(params[:id])

    @picture.destroy
  end

  private
  def picture_params
    params.require(:picture).permit(:photo)
  end
end
