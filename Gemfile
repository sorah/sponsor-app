source 'https://rubygems.org'
ruby '~> 2.7.1' if ENV['STACK'] || ENV['IS_HEROKU']

gem 'rails', '~> 6.0.0'
gem 'rails-i18n', '~> 6.0'
gem 'rack-contrib'

gem 'pg', '>= 0.18', '< 2.0'
gem 'redis-rails'

gem 'addressable'
gem 'commonmarker'
gem 'aws-sdk-core' # STS
gem 'aws-sdk-s3'
gem 'omniauth', '< 2'
gem 'omniauth-github'
gem 'octokit'
gem 'jwt'
gem 'hashdiff'
gem 'rqrcode'

gem 'nokogiri'

gem 'sidekiq'

gem 'jbuilder', '~> 2.9'
gem 'hamlit'
gem 'simpacker'

gem 'premailer-rails'

gem 'letter_opener_web', git: 'https://github.com/fgrehm/letter_opener_web', ref: 'ab50ad09a2af5350bdca9c079bba73523e64f4cd' # https://github.com/fgrehm/letter_opener_web/pull/83
gem 'rspec-rails'

gem 'revision_plate'
gem "sentry-raven"

gem 'puma'

group :production do
  gem 'barnes'
end

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'

group :development, :test do
  # gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'listen'
end

group :development do
  # gem 'web-console', '>= 3.3.0'
end
