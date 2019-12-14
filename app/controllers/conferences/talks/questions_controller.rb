# frozen_string_literal: true

class Conferences::Talks::QuestionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  before_action :logged_in?

  def index
    render json: {
      code: 200,
      data: Talk.find_by_conference_id_and_id(params[:conference_id], params[:talk_id])
        .as_json(
          only: %i[start_time end_time title],
          include: {
            speakers: { only: %i[id name] },
            questions: {
              only: %i[content created_at],
              include: {
                user: { only: %i[name id] }
              }
            }
          }
        )
    }
  end

  def create
    talk = Talk.find(params[:talk_id])

    question = current_user.questions.new(content: params[:question], talk: talk)
    if question&.save
      render json: { code: 200 }
    else
      render json: {
        code: 400,
        errors: question.errors.messages
      }
    end
  end
end
