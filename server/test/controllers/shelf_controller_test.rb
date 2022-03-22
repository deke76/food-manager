require "test_helper"

class ShelfControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get shelf_index_url
    assert_response :success
  end
end
