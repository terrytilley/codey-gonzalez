class GamesController < ApplicationController

  def new
    @user = User.find(params[:id])
    @game = Game.new
  end

  def create
    @user = current_user
    @game = @user.game.build_with_user(game_params, current_user)
  end

  private

  def game_params
    params.require(:game).permit(:accuracy, :wpm, :score)
  end

end
