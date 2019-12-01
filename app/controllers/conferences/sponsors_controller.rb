class Conferences::SponsorsController < ApplicationController
  def index
    render json: Conference.find(params[:conference_id]).to_json(
      only: [],
      include: {
        sponsors: {
          only: [:id, :name, :description, :website, :email, :address, :pobox],
        },
      },
    )
  end
end
