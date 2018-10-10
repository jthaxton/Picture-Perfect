class ApplicationController < ActionController::Base
  def current_user
    @user =|| User.find_by_session_token(session[:session_token])
  end

  def login(user)
    
  end

  def logout
    session[:session_token] = nil
    current_user.reset_session_token
  end

  def require_login
    if !logged_in?
      render json: ['Invalid Credentials'], status: 402
    end
  end

  def logged_in?
    !!current_user
  end

end
