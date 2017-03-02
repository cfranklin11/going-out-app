class SuggestionsController < ApplicationController
  def location
  end

  def categories
    @location_id = params[:location_id]
  end

  def budget
    @location_id = params[:location_id]
    @query = params[:query]
  end

  def index
  end
end
