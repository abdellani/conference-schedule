class ConferencesController < ApplicationController
  def index
    @conferences=Conference.all.select(:id,:subject,:description,:location)
    render json: @conferences
  end
end
