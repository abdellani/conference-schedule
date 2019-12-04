class Conferences::AttendancesController < ApplicationController
  before_action :is_logged_in?

  def index
    render json: Conference.find(params[:conference_id]).
             attendees.to_json(
             only: [:id, :name, :role],
           )
  end
end
