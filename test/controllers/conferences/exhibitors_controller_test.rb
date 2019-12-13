require 'test_helper'

class Conferences::ExhibitorsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get conferences_exhibitors_index_url
    assert_response :success
  end

end
