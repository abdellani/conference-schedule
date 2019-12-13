require 'test_helper'

class Conferences::SponsorsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get conferences_sponsors_index_url
    assert_response :success
  end

end
