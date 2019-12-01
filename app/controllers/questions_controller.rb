class QuestionsController < ApplicationController
  def index
    render json: Conference.find(params[:conference_id]).
             talks.find(params[:talk_id]).
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
