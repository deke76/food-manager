Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # Food routes
  get "/foods", to: "foods#all"
  get "/foods/autocomplete", to: "foods#autocomplete"
  
  # User Routes
  resources :users do
    get "/foods", to: "foods#users"
    resources :locations, only: [:index]
  end

  # Location Routes
  get "/locations", to: "locations#all"
  resources :locations, only: [:show] do
    get "/foods", to: "foods#locations"
  end

  # Recipe Routes
  resources :recipes, only: [:index, :show]

end
