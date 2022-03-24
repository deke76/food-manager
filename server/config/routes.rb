Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/locations", to: "locations#all"
  get "/foods", to: "foods#all"
  get "/foods/autocomplete", to: "foods#autocomplete"
  
  get "/recipes", to: "foods#recipes_index"
  get "/recipes/:id", to: "foods#recipes_show"

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
