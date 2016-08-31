class UsersController < ApplicationController
  def index
    if current_user
      @user = current_user
    else
      redirect_to new_user_session_path
    end
  end



end
