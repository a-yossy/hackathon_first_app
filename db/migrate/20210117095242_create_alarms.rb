class CreateAlarms < ActiveRecord::Migration[5.1]
  def change
    create_table :alarms do |t|
      t.datetime :get_up_time, null: false
      t.bigint :set_timeout_id, unsigned: true

      t.timestamps
    end
  end
end
