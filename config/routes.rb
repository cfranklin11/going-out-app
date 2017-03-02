Rails.application.routes.draw do
  root 'static_pages#home'

  get 'category', to: 'suggestions#category'
  get 'location', to: 'suggestions#location'
  get 'budget', to: 'suggestions#budget'
  get 'index', to: 'suggestions#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
