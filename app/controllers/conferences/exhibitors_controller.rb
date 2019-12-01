class Conferences::ExhibitorsController < ApplicationController
  def index
    render json: Conference.find(params[:conference_id]).to_json(
      only: [],
      include: {
        exhibitors: {
          only: [:id, :name, :description, :website],
        },
      },
    )
  end
end
