# config/puma.rb

# Specifies the `worker_timeout` threshold that Puma will use to wait before
# terminating a worker in development environments.
worker_timeout 3600 if ENV.fetch('RAILS_ENV', 'development') == 'development'

# Specifies the `port` that Puma will listen on to receive requests; default is 3000.
port ENV.fetch('PORT', 3000)

# Specifies the `environment` that Puma will run in.
environment ENV.fetch('RAILS_ENV', 'development')

# Specifies the `pidfile` that Puma will use.
pidfile ENV.fetch('PIDFILE', 'tmp/pids/server.pid')

# Allow puma to be restarted by `bin/rails restart` command.
plugin :tmp_restart

# Bind to a specific IP address and port
bind 'tcp://0.0.0.0:3000'

# Increase the number of workers
workers Integer(ENV['WEB_CONCURRENCY'] || 2)

# Increase the number of threads per worker
threads_count = Integer(ENV['RAILS_MAX_THREADS'] || 5)
threads threads_count, threads_count
