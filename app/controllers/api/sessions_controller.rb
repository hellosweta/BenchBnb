class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    unless @user.nil?
      login(@user)
      render "api/users/show.json.jbuilder"
    else
      render(
        json: ['Invalid username/password combination'],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render(
        json: {}
      )
    else
      render(
        json: ['No users to log out'],
        status: 404
      )
    end
  end
end
