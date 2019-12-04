class Conferences::TalksController < ApplicationController
  before_action :is_logged_in?
  def index
    render json: Conference.find(params[:conference_id]).
             talks.to_json(
             only: [:id, :day, :start_time, :end_time, :title, :description, :location],
             include: {
              speakers: { only: [:id, :name,:role] }
             }
           )
  end

  def show
    render json: Talk.find_by_conference_id_and_id(params[:conference_id], params[:id]).
             to_json(
             only: [:id, :day, :start_time, :end_time, :description, :location,:title],
             include: {
               conference: { only: [:subject, :description] },
               speakers: { only: [:id, :name,:role] },
               moderators: { only: [:id, :name,:role] },
             },
           )
  end
end
