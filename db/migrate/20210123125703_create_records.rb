class CreateRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :records do |t|
      t.integer :score, null: false
      t.timestamps
    end
  end
end
