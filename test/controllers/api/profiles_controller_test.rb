require 'test_helper'

class Api::ProfilesControllerTest < ActionDispatch::IntegrationTest
  def show 
    @prof_pic = Picture.find_by_id(params[:profile][:picture_id])
  end 

  def prof_params 
    params.require(:profile).permit(:user_id, :picture_id)
  end 
end
