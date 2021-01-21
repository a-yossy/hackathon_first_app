class TodoesController < ApplicationController

  def index
    @todoes = Todo.all
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      redirect_to todoes_path
    else
      render 'new'
    end
  end

  def show
    @todo = Todo.find(params[:id])
  end

  def edit
    @todo = Todo.find(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update_attributes(todo_params)
      redirect_to todoes_path
    else
      render 'edit'
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    redirect_to todoes_path
  end

  private

    def todo_params
      params.permit(:content, :memo)
    end

end



