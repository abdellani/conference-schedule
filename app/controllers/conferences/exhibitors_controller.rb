class Conferences::ExhibitorsController < ApplicationController
  def index
    render json: Conference.find(params[:conference_id]).exhibitors.to_json(
          only: [:id, :name, :description, :website]
    )
  end
end
