class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :current_user

  def current_user
    if cookies["user"]
      @user = cookies["user"]
    end
  end
end
