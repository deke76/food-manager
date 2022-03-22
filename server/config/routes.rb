Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :foods, only: [:show, :new]
  
  resources :users do
    resources :locations, only: [:index]
    resources :foods, only: [:index]
  end

  resources :locations do
    resources :shelves, only: [:index]
  end
end
