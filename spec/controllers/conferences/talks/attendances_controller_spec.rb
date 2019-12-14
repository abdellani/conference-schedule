require "rails_helper"

RSpec.describe Conferences::Talks::AttendancesController, type: :controller do
  fixtures :users, :conferences, :talks, :attendances, :users
  describe "#index" do
    scenario "Should get code=401 if the user is not authenticated" do
      visit "/api/conferences/1/talks/1/attendances"
      answer = { code: 401 }.to_json
      expect(page.body).to eq answer
    end
    scenario "Should get code=200 with list of attandees of the talk if the user is authenticated" do
      page.set_rack_session(id: 1)
      visit "/api/conferences/1/talks/1/attendances"
      answer = [
        {
          id: 1,
          name: "participant",
          role: "worker",
        },
        {
          id: 2,
          name: "speaker",
          role: "senior developer",
        },
        {
          id: 3,
          name: "moderator",
          role: "Teacher",
        },
      ].to_json
      expect(page.body).to eq answer
    end
  end
end
