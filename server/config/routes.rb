Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # Food routes
  get "/foods", to: "foods#all"
  get "/foods/autocomplete", to: "foods#autocomplete"
  get "/foods/barcode/:barcode", to: "foods#barcode"
  
  # User Routes
  resources :users do
    get "/foods", to: "foods#users"
    resources :locations, only: [:index, :show] do
      get "/foods", to: "foods#locations"
    end
  end

  # Location Routes
  get "/locations", to: "locations#all"

  # Recipe Routes
  resources :recipes, only: [:index, :show]

end
