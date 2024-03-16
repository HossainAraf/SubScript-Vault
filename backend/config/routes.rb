# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users, only: [:create]
  post "/signup", to: "users#create"  # Add this line for the signup endpoint
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"
end
