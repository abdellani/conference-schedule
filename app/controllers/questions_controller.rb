class QuestionsController < ApplicationController
  def index
    render json: Conference.find(params[:conference_id]).
    talks.find(params[:talk_id]).
    questions.to_json(
      only: [:content,:created_at],
      include: {
        user:{ only: [:name,:id]}
      }
    )

  end
end
