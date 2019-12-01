class Conferences::Talks::QuestionsController < ApplicationController
  def index
    render json: Talk.find_by_conference_id_and_id(params[:conference_id],params[:talk_id]).
             to_json(
             only:[:start_time,:end_time,:description],  
             include: {
               speakers:{ only: [:id,:name]},
               questions: {
                 only: [:content, :created_at],
                 include: {
                   user: { only: [:name, :id] },
                 },
               },
             },
           )
  end
end
