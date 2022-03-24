Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/foods", to: "foods#all"
  get "/locations", to: "locations#all"

  resources :users do
    get "/foods", to: "foods#user"
    resources :locations do
      resources :foods
    end
  end
  
  # resources :users, only: [:show] do
  #   resources :locations, only: [:index]
  #   resources :foods, only: [:index]
  # end

end
