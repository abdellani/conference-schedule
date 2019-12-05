class Conferences::Talks::QuestionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
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
  def create
    talk=Talk.find(params[:talk_id])

    question=current_user.questions.new(content: params[:question],talk:talk) 
    if question && question.save 
      render json: {code: 200}
    else
      render json: {
        code: 400,
        errors: question.errors.messages
      }
    end
  end
    
end
