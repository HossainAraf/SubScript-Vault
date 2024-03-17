set -o errexit

bundle install
bundle exec rails assets:precompile
bundle exwc rails assets:clean
bundle exec raisl db:migrate