class UsersController < ApplicationController
  before_action :authorized, only: [:auto_login]

  # Signup
  def create
    @user = User.create(user_params)
    if @user.valid?
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token: }, status: :created
    else
      render json: { error: 'Invalid username or password' }, status: :not_acceptable
    end
  end

  # Login
  def login
    @user = User.find_by(username: params[:username])
    if @user&.authenticate(params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token:, redirect_to: '/localhost:3000/dashboard' }, status: :accepted
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end

  # Auto Login
  def auto_login
    render json: @user
  end

  private

  def user_params
    params.permit(:username, :password, :age)
  end
end
