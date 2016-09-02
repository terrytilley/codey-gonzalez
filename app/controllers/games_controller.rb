class GamesController < ApplicationController

  def index
    @code = Code.find(rand(1..6))
  end

  def new
    @game = Game.new
  end

  def create
    if user_signed_in?
      @game = current_user.games.create_with_user(game_params, current_user)
    end
  end

  private

  def game_params
    params.require(:game).permit(:accuracy, :wpm, :score, :duration)
  end

end
