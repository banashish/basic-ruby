require 'test_helper'

class MovieListControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get movie_list_index_url
    assert_response :success
  end

end
