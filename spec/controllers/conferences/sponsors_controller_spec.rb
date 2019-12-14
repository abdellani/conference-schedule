require "rails_helper"

RSpec.describe Conferences::SponsorsController, type: :controller do
  fixtures :users, :conferences, :participations, :companies
  describe "#index" do
    scenario "Should get code=401 if the user is not authenticated" do
      visit "/api/conferences/1/sponsors"
      answer = { code: 401 }.to_json
      expect(page.body).to eq answer
    end
    scenario "Should get code=200 with list of sponsors with details if the user is authenticated" do
      page.set_rack_session(id: 1)
      visit "/api/conferences/1/sponsors"
      answer = {
        code: 200,
        data: [
                 {
                   id: 1,
                   name: "sponsor",
                   description: "sponsor",
                   website: "www.company.com",
                   email: "company@email.com",
                   address: "address",
                   pobox: "00000",
                   telephone: "+000000000000",
                 },
               ],
      }.to_json
      expect(page.body).to eq answer
    end
  end
end
