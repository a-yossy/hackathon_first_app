class AddMemoToTodoes < ActiveRecord::Migration[5.1]
  def change
    add_column :todos, :memo, :text
  end
end
