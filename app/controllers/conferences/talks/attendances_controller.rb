class Conferences::Talks::AttendancesController < ApplicationController
  def index
    render json: Talk.find_by_conference_id_and_id(
      params[:conference_id], params[:talk_id]).
      attendees.to_json(
             only: [:id, :name]
           )
  end
end
