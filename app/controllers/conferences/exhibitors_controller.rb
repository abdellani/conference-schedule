class Conferences::ExhibitorsController < ApplicationController
  before_action :is_logged_in?
  def index
    render json: Conference.find(params[:conference_id]).exhibitors.to_json(
          only: [:id, :name, :description, :website]
    )
  end
end
