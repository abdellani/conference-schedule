require "rails_helper"

RSpec.describe ConferencesController, type: :controller do
  fixtures :users, :conferences
  describe "#index" do
    scenario "Should get code=401 if the user is not authenticated" do
      visit "/api/conferences/"
      answer = { code: 401 }.to_json
      expect(page.body).to eq answer
    end
    scenario "Should get code=200 with list of conferences if the user is authenticated" do
      page.set_rack_session(id: 1)
      visit "/api/conferences/"
      answer = { code: 200, data: [
        { id: 1,
          date: "2020-01-01",
          location: "University X",
          subject: "DevOps",
          description: "Introduction to docker" },
        { id: 2,
          date: "2020-01-09",
          location: "University Z",
          subject: "Web development",
          description: "Introduction into Rails" },
      ] }.to_json
      expect(page.body).to eq answer
    end
  end
  describe "#show" do
    scenario "Should get code=401 if the user is not authenticated" do
      visit "/api/conferences/1"
      answer = { code: 401 }.to_json
      expect(page.body).to eq answer
    end
    scenario "Should get code=200 with list of conferences if the user is authenticated" do
      page.set_rack_session(id: 1)
      visit "/api/conferences/1"
      answer = { code: 200, data: 
        { id: 1,
          date: "2020-01-01",
          location: "University X",
          subject: "DevOps",
          description: "Introduction to docker",
          talks:[] },

      }.to_json
      expect(page.body).to eq answer
    end
  end
end
