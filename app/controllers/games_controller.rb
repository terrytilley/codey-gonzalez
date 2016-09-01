class GamesController < ApplicationController
  respond_to :js, :json, :html

  def index
    @code = Code.find(rand(1..5))
  end

  def new
    @game = Game.new
  end

  def create
    @game = current_user.games.build_with_user(game_params, current_user)
  end

  private

  def game_params
    params.require(:game).permit(:accuracy, :wpm, :score, :duration)
  end

end
