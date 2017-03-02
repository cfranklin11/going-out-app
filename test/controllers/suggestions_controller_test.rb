require 'test_helper'

class SuggestionsControllerTest < ActionDispatch::IntegrationTest
  test "should get category" do
    get suggestions_category_url
    assert_response :success
  end

  test "should get location" do
    get suggestions_location_url
    assert_response :success
  end

  test "should get budget" do
    get suggestions_budget_url
    assert_response :success
  end

  test "should get index" do
    get suggestions_index_url
    assert_response :success
  end

end
