# frozen_string_literal: true

class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create show]

  def create
    @user = User.new(user_params)
    if @user.save
      render json: {
        code: 200
      }
    else
      render json: {
        code: 400,
        errors: @user.errors.messages
      }
    end
  end

  def show
    render json: { code: 200,
                   data: current_user.as_json(
                     only: [:name],
                     include: {
                       attendances: {
                         only: %i[id role],
                         include: {
                           talk: {
                             only: %i[id title start_time end_time day],
                             include: {
                               conference: {
                                 only: %i[id subject location date]
                               }
                             }
                           }
                         }
                       }
                     }
                   ) }
  end

  private

  def user_params
    params[:user].permit(:name, :company, :role, :email, :mobile, :password, :bio)
  end
end
