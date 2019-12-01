class TalksController < ApplicationController
  def index
    render json: Conference.find(params[:conference_id]).
             talks.select(
               :id,:day, :start_time,:end_time,:description,:location
              )
  end

  def show
     talk=Conference.find(params[:conference_id]).talks.find(params[:id])
     render json: {
       speakers:talk.speakers.select(:id,:name),
       moderator:talk.moderators.select(:id,:name)
      }
  end
end
