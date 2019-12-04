class Conferences::AttendancesController < ApplicationController
  def index
    render json: Conference.find(params[:conference_id]).
             attendees.to_json(
             only: [:id, :name, :role],
           )
  end
end
