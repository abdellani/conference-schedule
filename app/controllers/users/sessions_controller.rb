class Users::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  def create
    user = User.find_by_email(params[:user][:email])
    if user and user.authenticate(params[:user][:password])
      login user
      render json: {
               code: 200,
               user: {
                 name: user.name,
               },
             }
    else
      render json: {
        code: 400,
        errors: { Error: ["Email / Password invalid !"] },
      }
    end
  end

  def destroy
    @current_user=nil
    session.delete(:id)
  end

  private

  def user_params
    params[:user].permit(:email, :password)
  end
end
