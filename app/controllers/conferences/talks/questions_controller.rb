class Conferences::Talks::QuestionsController < ApplicationController
  before_action :is_logged_in?

  def index
    render json: {
             code: 200,
             data: Talk.find_by_conference_id_and_id(params[:conference_id], params[:talk_id]).
               as_json(
               only: [:start_time, :end_time, :title],
               include: {
                 speakers: { only: [:id, :name] },
                 questions: {
                   only: [:content, :created_at],
                   include: {
                     user: { only: [:name, :id] },
                   },
                 },
               },
             ),
           }
  end
end
