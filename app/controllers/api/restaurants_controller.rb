require 'uri'
require 'net/http'

module Api
  class RestaurantsController < ApplicationController
    def locations
      query = location_params[:query]
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
      location_id = @location_id
      query = @query

      url = URI("https://developers.zomato.com/api/v2.1/search?entity_id=#{location_id}&entity_type=city&q=#{query}&category=2&sort=rating&order=desc")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true
      http.verify_mode = OpenSSL::SSL::VERIFY_NONE

      request = Net::HTTP::Get.new(url)
      request['user-key'] = ENV['ZOMATO_KEY']

      response = http.request(request)

      render json: response.read_body
    end

    private

    def location_params
      params.require(:locations).permit(:query)
    end

    def restaurants_params
      params.require(:restaurants).permit(:location_id, :query)
    end
  end
end
