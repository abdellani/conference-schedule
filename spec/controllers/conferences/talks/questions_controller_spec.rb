# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Conferences::Talks::QuestionsController, type: :controller do
  fixtures :users, :conferences, :talks, :attendances, :users, :questions
  describe '#index' do
    scenario 'Should get code=401 if the user is not authenticated' do
      visit '/api/conferences/1/talks/1/questions'
      answer = { code: 401 }.to_json
      expect(page.body).to eq answer
    end
    scenario 'Should get code=200 with list of questions related to the talk if the user is authenticated' do
      page.set_rack_session(id: 1)
      visit '/api/conferences/1/talks/1/questions'
      answer = {
        code: 200,
        data: {
          start_time: '2000-01-01T09:00:00.000Z',
          end_time: '2000-01-01T10:00:00.000Z',
          title: 'Opening',
          speakers: [
            {
              id: 2,
              name: 'speaker'
            }
          ],
          questions: [
            {
              content: 'this is a question',
              created_at: '2019-12-05T23:44:39.120Z',
              user: {
                id: 1,
                name: 'participant'
              }
            },
            {
              content: 'this is an answer',
              created_at: '2019-12-05T23:44:39.130Z',
              user: {
                id: 2,
                name: 'speaker'
              }
            }
          ]
        }
      }.to_json
      expect(page.body).to eq answer
    end
  end
end
