class Conferences::SponsorsController < ApplicationController
  def index
    render json: Conference.find(params[:conference_id]).sponsors.to_json(
          only: [:id, :name, :description, :website, :email, :address, :pobox],
    )
  end
end
