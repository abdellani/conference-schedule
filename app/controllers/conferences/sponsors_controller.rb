# frozen_string_literal: true

class Conferences::SponsorsController < ApplicationController
  before_action :logged_in?
  def index
    render json: {
      code: 200,
      data: Conference.find(params[:conference_id]).sponsors.as_json(
        only: %i[id name description website email telephone address pobox]
      )
    }
  end
end
