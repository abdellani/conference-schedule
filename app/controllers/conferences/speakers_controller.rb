class Conferences::SpeakersController < ApplicationController
  before_action :is_logged_in?

  def index
    render json: Conference.find(params[:conference_id]).
             speakers.to_json(
             only: [:id, :name, :role],
           )
  end
end
