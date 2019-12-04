class UsersController < ApplicationController
  def Create

    render json: Conference.all.to_json(
      only: [:id,:date,:location,:subject,:description]
    )
  end
  private 
    def user_params
    end
end