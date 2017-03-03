require 'net/http'
require 'json'

class SuggestionsController < ApplicationController
  def plan
  end

  def index
  end

  def locations
    query = location_params[:location_query]
    url = URI("https://developers.zomato.com/api/v2.1/cities?q=#{query}")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Get.new(url)
    request['user-key'] = ENV['ZOMATO_KEY']

    response = http.request(request)

    render json: response.read_body
  end

  def restaurants
    location_id = restaurant_params[:location_id]
    query = restaurant_params[:category_query]
    budget = restaurant_params[:budget].to_f

    url = URI("https://developers.zomato.com/api/v2.1/search?entity_id=#{location_id}&entity_type=city&q=#{query}&category=2&sort=rating&order=desc")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Get.new(url)
    request['user-key'] = ENV['ZOMATO_KEY']

    response = http.request(request)
    restaurant_hash = JSON.parse(response.read_body)
    restaurants = restaurant_hash['restaurants']

    restaurant_suggestions = restaurants.select do |restaurant|
      cost_for_two = restaurant['restaurant']['average_cost_for_two']
      cost_for_one = cost_for_two && cost_for_two.to_f / 2
      cost_for_one <= budget
    end

    render json: restaurant_suggestions
  end

  private

  def location_params
    params.permit(:location_query)
  end

  def restaurant_params
    params.require(:plan).permit(:location_id, :category_query, :budget)
  end
end
