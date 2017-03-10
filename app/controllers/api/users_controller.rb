class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show.json.jbuilder"
    else
      render(
        json: @user.errors.full_messages,
        status: 422
      )
    end
  end
  # Render auth errors (e.g. 'invalid credentials' or 'username already exists') in your response with a corresponding error status (usually either 422, 401, or 404).
  # Use @user.errors when applicable.
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
