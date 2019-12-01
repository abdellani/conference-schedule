class ConferencesController < ApplicationController
  def index
    render json: Conference.all.to_json(
      only: [:id,:date,:location,:subject,:description]
    )
  end
  def show
    render json: Conference.find(params[:id]).to_json(
      only: [:id,:date,:location,:subject,:description],
      include:{
        talks:{only: [:id, :day, :start_time, :end_time, :description, :location]}
      }
    )
  end
end
