# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Conferences::SpeakersController, type: :controller do
  fixtures :users, :conferences, :talks, :attendances, :users
  describe '#index' do
    scenario 'Should get code=401 if the user is not authenticated' do
      visit '/api/conferences/1/speakers'
      answer = { code: 401 }.to_json
      expect(page.body).to eq answer
    end
    scenario 'Should get code=200 with list of speakers for the confenrence if the user is authenticated' do
      page.set_rack_session(id: 1)
      visit '/api/conferences/1/speakers'
      answer = {
        code: 200,
        data: [
          {
            id: 2,
            name: 'speaker',
            role: 'senior developer'
          }
        ]
      }.to_json
      expect(page.body).to eq answer
    end
  end
end
