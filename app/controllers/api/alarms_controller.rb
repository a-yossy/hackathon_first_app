class Api::AlarmsController < Api::ApplicationController
  def create
    @alarm = Alarm.new(alarm_params)
    if @alarm.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def alarm_params
    params.require(:alarm).permit(:get_up_time, set_timeout_id)
  end
end
