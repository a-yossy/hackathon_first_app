class Api::TodoesController < Api::ApplicationController
  def index
    data = Todo.all
    render json: data
  end

  def create
    score = params[:score]
    Record.create!(score: score)
  end
end
