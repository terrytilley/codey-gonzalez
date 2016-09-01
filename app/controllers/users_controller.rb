class UsersController < ApplicationController
  def index
    if current_user
      @user = current_user
      @game = Game.where(user_id: @user.id)
    else
      redirect_to new_user_session_path
    end
  end



end
