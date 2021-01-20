class Todo < ApplicationRecord
  validates :content, presence: true, length: { maximum: 60 }
end
