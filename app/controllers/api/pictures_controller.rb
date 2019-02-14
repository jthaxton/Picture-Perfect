class Api::PicturesController < ApplicationController

  def index
    @pictures = Picture.with_attached_photo.includes(:user, :comments, :photo_attachment)
    @comments = Comment.includes(:user)
    render :index
  end

  def show
    @picture = Picture.find_by_id(params[:id])
    render :show
  end

  def create
    @picture = Picture.new(user_id: current_user.id, body: params[:picture][:body])
    @picture.photo.attach(io: params[:picture][:photo], filename: "")
    if @picture.save
      render json: @picture
    else
      render json: post.errors.full_messages
    end

  end



  def destroy
    @picture = Picture.find_by_id(params[:id])
    @picture.photo.destroy
    render :show
  end

  private
  def picture_params
    params.require(:picture).permit(:photo, :body)
  end
end
