Rails.application.routes.draw do
  root to: 'top_pages#show'
  get    '/login',  to: 'top_pages#show'
  post   '/login',  to: 'top_pages#create'
  delete '/logout', to: 'top_pages#destroy'
  namespace :api do
    resources :alarms, only: %i[create]
  end
end
