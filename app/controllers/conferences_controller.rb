# frozen_string_literal: true

class ConferencesController < ApplicationController
  before_action :logged_in?

  def index
    render json: {
      code: 200,
      data: Conference.all.as_json(
        only: %i[id date location subject description]
      )
    }
  end

  def show
    render json: {
      code: 200,
      data: Conference.find(params[:id]).as_json(
        only: %i[id date location subject description],
        include: {
          talks: { only: %i[id day start_time end_time description location] }
        }
      )
    }
  end
end
