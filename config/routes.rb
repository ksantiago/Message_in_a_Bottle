Ship2shipApp::Application.routes.draw do

  root :to => "messages#index"

  resources :messages

end
