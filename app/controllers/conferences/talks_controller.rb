class Conferences::TalksController < ApplicationController
  before_action :is_logged_in?

  def index
    render json: { code: 200,
                  data: Conference.find(params[:conference_id]).
             talks.as_json(
             only: [:id, :day, :start_time, :end_time, :title, :description, :location],
             include: {
               speakers: { only: [:id, :name, :role] },
             },
           ) }
  end

  def show
    render json: {
             code: 200,
             data: Talk.find_by_conference_id_and_id(params[:conference_id], params[:id]).
               as_json(
               only: [:id, :day, :start_time, :end_time, :description, :location, :title],
               include: {
                 conference: { only: [:subject, :description] },
                 speakers: { only: [:id, :name, :role] },
                 moderators: { only: [:id, :name, :role] },
               },
             ),
           }
  end
end
