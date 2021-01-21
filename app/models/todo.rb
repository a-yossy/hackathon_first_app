class Todo < ApplicationRecord
  validates :content, presence: true, length: { maximum: 60 }
  validates :memo, length: { maximum: 140 }
end
