class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    user = User.find_by_session_token(session[:session_token])
    return user 
  end

  def logged_in? 
    !!current_user 
  end

  def login!(user)
    session[:session_token] = user.session_token 
  end

  def logout! 
    current_user.reset_session_token 
    session[:session_token] = nil 
  end
  
end
