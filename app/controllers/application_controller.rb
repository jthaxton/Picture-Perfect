class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signin(user)
    session[:session_token] = user.reset_session_token
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
