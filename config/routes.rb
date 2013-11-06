Ship2shipApp::Application.routes.draw do

  root to: 'welcome#index'
  resources :messages

end
