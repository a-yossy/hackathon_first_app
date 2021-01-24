Rails.application.routes.draw do
  root to: 'top_pages#show'
  get    '/login',  to: 'top_pages#show'
  post   '/login',  to: 'top_pages#create'
  delete '/logout', to: 'top_pages#destroy'
  resources :todoes, except: %i[update]
  post "todoes/:id/update" => "todoes#update"
  namespace :api do
    resources :records, only: %i[index]
    resources :todoes, only: %i[index create]
  end
end
