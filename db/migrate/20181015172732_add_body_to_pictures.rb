class AddBodyToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :body, :string
    
  end
end
