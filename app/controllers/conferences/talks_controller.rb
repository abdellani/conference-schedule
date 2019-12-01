class Conferences::TalksController < ApplicationController
  def index
    render json: Conference.find(params[:conference_id]).
             talks.select(
             :id, :day, :start_time, :end_time, :description, :location
           )
  end

  def show
    render json: Talk.find_by_conference_id_and_id(params[:conference_id], params[:id]).
             to_json(
             only: [:id, :day, :start_time, :end_time, :description, :location],
             include: {
               conference: { only: [:subject, :description] },
               speakers: { only: [:id, :name] },
               moderators: { only: [:id, :name] },
             },
           )
  end
end
