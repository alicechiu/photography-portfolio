Rails.application.routes.draw do
  root to: "home#index"
  get 'home/index'

  devise_for :users, controllers: {
    sessions: 'user/sessions',
    registrations: 'user/registrations'
  }

  resources :home, only: [:index]
  resources :portfolio
  resources :post
  resources :photo_locations
  resources :users
  resources :messages, only: [:index, :new, :create]

  devise_scope :user do
    post 'users/sign_up', to: 'devise/registrations#create'
  end
end
