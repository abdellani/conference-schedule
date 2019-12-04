class Conferences::Talks::AttendancesController < ApplicationController
  before_action :is_logged_in?
  def index
    render json: Talk.find_by_conference_id_and_id(
      params[:conference_id], params[:talk_id]).
      attendees.to_json(
             code:200,
             only: [:id, :name,:role]
           )
  end
end
