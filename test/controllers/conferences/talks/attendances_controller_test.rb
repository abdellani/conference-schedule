# frozen_string_literal: true

require 'test_helper'

class Conferences::Talks::AttendancesControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get conferences_talks_attendances_index_url
    assert_response :success
  end
end
