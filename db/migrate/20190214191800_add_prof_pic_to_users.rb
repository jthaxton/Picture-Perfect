class AddProfPicToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :prof_pic_id, :integer
    add_column :users, :background_pic_id, :integer
  end
end
