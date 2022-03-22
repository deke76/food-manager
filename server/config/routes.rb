Rails.application.routes.draw do
  get 'locations/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :foods, only: [:index, :show, :create]

  resources :locations, only: [:index]
end
