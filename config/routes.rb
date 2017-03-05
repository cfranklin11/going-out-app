Rails.application.routes.draw do
  root 'static_pages#home'

  # Render views
  get 'plan', to: 'suggestions#plan'
  get 'suggestions', to: 'suggestions#index'

  # Return JSON
  get 'plan/restaurants', to: 'suggestions#restaurants'
  get 'plan/locations', to: 'suggestions#locations'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
