class Alarm < ApplicationRecord
  validates :get_up_time, presence: true
  validate :get_up_time_should_be_later_than_current_time, if: :get_up_time
end
