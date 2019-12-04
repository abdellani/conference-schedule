class ConferencesController < ApplicationController
  before_action :is_logged_in?

  def index
    render json: {
             code: 200,
             data: Conference.all.as_json(
               only: [:id, :date, :location, :subject, :description],
             ),
           }
  end

  def show
    render json: {
             code: 200,
             data: Conference.find(params[:id]).as_json(
               only: [:id, :date, :location, :subject, :description],
               include: {
                 talks: { only: [:id, :day, :start_time, :end_time, :description, :location] },
               },
             ),
           }
  end
end
