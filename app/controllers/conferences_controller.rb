class ConferencesController < ApplicationController
  def index
    @conferences=Conference.all.select(:id,:location,:description)
    render json: @conferences
  end
end
