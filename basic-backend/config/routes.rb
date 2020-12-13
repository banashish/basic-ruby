Rails.application.routes.draw do
  resources :movies
  get 'movie_list/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'director/:id/movies' => 'directors#movies'
end
