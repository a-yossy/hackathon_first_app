class Api::RecordsController < Api::ApplicationController
  def index
    data=Hash.new
    Record.all.each do |record|
      data[record.created_at.to_i] = record.score
    end
    render json: data
  end
end
