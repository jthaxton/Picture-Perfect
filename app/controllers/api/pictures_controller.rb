class Api::PicturesController < ApplicationController
  def show
    @picture = Picture.find_by_id(params[:id])
    render :show 
  end
end
