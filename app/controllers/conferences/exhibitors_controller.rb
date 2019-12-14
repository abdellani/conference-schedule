# frozen_string_literal: true

class Conferences::ExhibitorsController < ApplicationController
  before_action :logged_in?

  def index
    render json: {
      code: 200,
      data: Conference.find(params[:conference_id]).exhibitors.as_json(
        only: %i[id name description website]
      )
    }
  end
end
