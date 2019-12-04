class Conferences::SpeakersController < ApplicationController
  def index
    render json: Conference.find(params[:conference_id]).
             speakers.to_json(
             only: [:id, :name, :role],
           )
  end
end
