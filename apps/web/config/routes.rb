# Configure your routes here
# See: http://hanamirb.org/guides/routing/overview/
#
# Example:
# get '/hello', to: ->(env) { [200, {}, ['Hello from Hanami!']] }
root to: 'projects#index'
post '/projects', to: 'projects#create', as: 'projects'
get '/projects', to: 'projects#index'
