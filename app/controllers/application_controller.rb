class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def login user
    session[:id]=user.id
  end
  def current_user
    @current_user |=session[:id] && User.find(session[:id])
  end
  def is_logged_in?
    render json: {code:401 }unless current_user
  end
end
