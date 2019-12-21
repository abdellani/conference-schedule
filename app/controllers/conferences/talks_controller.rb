# frozen_string_literal: true

class Conferences::TalksController < ApplicationController
  before_action :logged_in?

  def index
    render json: { code: 200,
                   data: Conference.find(params[:conference_id])
                     .talks.as_json(
                       only: %i[id day start_time end_time title description location],
                       include: {
                         speakers: { only: %i[id name role] }
                       }
                     ) }
  end

  def show
    render json: {
      code: 200,
      data: Talk.find_by_conference_id_and_id(params[:conference_id], params[:id])
        .as_json(
          only: %i[id day start_time end_time description location title],
          include: {
            conference: { only: %i[subject description] },
            speakers: { only: %i[id name role] },
            moderators: { only: %i[id name role] }
          }
        )
    }
  end
end
