Rails.application.routes.draw do
  root 'static_pages#home'

  get 'categories', to: 'suggestions#categories'
  get 'location', to: 'suggestions#location'
  get 'budget', to: 'suggestions#budget'
  get 'index', to: 'suggestions#index'

  namespace :api do
    get 'restaurants/locations', to: 'restaurants#locations'
    get 'restaurants/restaurants', to: 'restaurants#restaurants'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
