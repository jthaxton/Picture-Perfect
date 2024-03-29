class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment: params[:comment], user_id: current_user.id, picture_id: params[:picture_id])
    if @comment.save
      render json: @comment.picture, serializer: PictureSerializer
    else
      render json: { message: "BAD!" }
    end
  end

  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find_by_id(params[:id])
    render :show
  end

  def comment_params
    params.require(:comment).permit(:comment, :user_id, :picture_id)
  end
end
