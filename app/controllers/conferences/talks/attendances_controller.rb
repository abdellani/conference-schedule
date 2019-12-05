class Conferences::Talks::AttendancesController < ApplicationController
  before_action :is_logged_in?
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    render json: Talk.find_by_conference_id_and_id(
             params[:conference_id], params[:talk_id]
           ).
             attendees.to_json(
             code: 200,
             only: [:id, :name, :role],
           )
  end

  def create
    puts current_user
    attandances = Talk.find_by_conference_id_and_id(
      params[:conference_id], params[:talk_id]
    ).attendances.build(user:current_user,role:"participante")
    if attandances && attandances.save
      render json: { code: 200 }
    else
      render json: { code: 400,
        errors:attandances.errors.messages
      }
    end
  end
end
