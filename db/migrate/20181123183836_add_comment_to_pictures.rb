class AddCommentToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :comment, :string
  end
end
