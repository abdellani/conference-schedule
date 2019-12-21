# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Conferences::ExhibitorsController, type: :controller do
  fixtures :users, :conferences, :participations, :companies
  describe '#index' do
    scenario 'Should get code=401 if the user is not authenticated' do
      visit '/api/conferences/1/exhibitors'
      answer = { code: 401 }.to_json
      expect(page.body).to eq answer
    end
    scenario 'Should get code=200 with list of exhibitors with details if the user is authenticated' do
      page.set_rack_session(id: 1)
      visit '/api/conferences/1/exhibitors'
      answer = {
        code: 200,
        data: [
          {
            id: 2,
            name: 'exhibitor',
            description: 'exhibitor',
            website: 'www.company1.com'
          }
        ]
      }.to_json
      expect(page.body).to eq answer
    end
  end
end
