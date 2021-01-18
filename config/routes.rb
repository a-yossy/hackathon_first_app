Rails.application.routes.draw do
  root to: 'top_pages#show'
  namespace :api do
    resources :alarms, only: %i[create]
  end
end
