class Conferences::AttendancesController < ApplicationController
  before_action :is_logged_in?

  def index
    render json: {
             code: 200,
             data: Conference.find(params[:conference_id]).
               attendees.as_json(
               only: [:id, :name, :role],
             ),
           }
  end
end
