class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.integer :picture_id, null: false
      t.timestamps
    end
  end
end
