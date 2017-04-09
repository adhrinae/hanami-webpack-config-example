# hanami-webpack-config-example
An Example of setting Webpack within Hanami project

## Requirements

- Ruby 2.4.1
- Node 7.8.0
- yarn or npm (yarn recommended)

## Setting development environments up

1. Install Hanami gem (If you don't installed it yet)

        gem install hanami

1. And all the dependencies

        bundle install

1. Migrate a database

        bundle exec hanami db migrate

1. Install node modules

        yarn install

1. Bundle assets

        yarn webpack / $ yarn dev (for development)

        yarn build (for production)

1. Start the server

        bundle exec hanami server

1. Look for what is going on - <http://localhost:2300>