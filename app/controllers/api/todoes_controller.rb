class Api::TodoesController < Api::ApplicationController
  def index
    data = Todo.all
    render json: data
  end
end
