require "rails_helper"

RSpec.describe Conferences::TalksController, type: :controller do
  fixtures :users, :conferences
  describe "#index" do
    scenario "Should get code=401 if the user is not authenticated" do
      visit "/api/conferences/1"
      answer = { code: 401 }.to_json
      expect(page.body).to eq answer
    end
    scenario "Should get code=200 with list of talks with details if the user is authenticated" do
      page.set_rack_session(id: 1)
      visit "/api/conferences/1/talks"
      answer = { code: 200, data: [
        {
          id: 1,
          day: 1,
          start_time: "2000-01-01T09:00:00.000Z",
          end_time: "2000-01-01T10:00:00.000Z",
          location: "A",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          title: "Opening",
          speakers:[]
        },
        {
          id: 2,
          day: 1,
          start_time: "2000-01-01T10:00:00.000Z",
          end_time: "2000-01-01T12:00:00.000Z",
          location: "C",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          title: "Introduction to Docker",
          speakers:[]
        },

      ] }.to_json
      expect(page.body).to eq answer
    end
  end
  describe "#show" do
    scenario "Should get code=401 if the user is not authenticated" do
      visit "/api/conferences/1/talks/1"
      answer = { code: 401 }.to_json
      expect(page.body).to eq answer
    end
    scenario "Should get code=200 with list of talks with details if the user is authenticated" do
      page.set_rack_session(id: 1)
      visit "/api/conferences/1/talks/1"
      answer = { code: 200, data: 
        {
          id: 1,
          day: 1,
          start_time: "2000-01-01T09:00:00.000Z",
          end_time: "2000-01-01T10:00:00.000Z",
          location: "A",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          title: "Opening",
          conference:{
            subject: "DevOps",
            description: "Introduction to docker"
          },
          speakers:[],
          moderators:[],
        },
       }.to_json
      expect(page.body).to eq answer
    end

  end
end
