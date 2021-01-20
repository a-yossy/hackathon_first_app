class TopPagesController < ApplicationController
  def show
    if session[:user]
      @user = session[:user]
    end
  end

  def create
    session[:user] = params[:session][:user]
    redirect_to root_url
  end

  def destroy
    session.delete(:user)
    redirect_to root_url
  end
end
