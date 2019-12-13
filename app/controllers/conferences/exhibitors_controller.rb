class Conferences::ExhibitorsController < ApplicationController
  before_action :is_logged_in?

  def index
    render json: {
             code: 200,
             data: Conference.find(params[:conference_id]).exhibitors.as_json(
               only: [:id, :name, :description, :website],
             ),
           }
  end
end
