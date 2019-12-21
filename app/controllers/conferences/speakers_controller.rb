# frozen_string_literal: true

class Conferences::SpeakersController < ApplicationController
  before_action :logged_in?

  def index
    render json: { code: 200,
                   data: Conference.find(params[:conference_id])
                     .speakers.as_json(
                       only: %i[id name role]
                     ) }
  end
end
