class ChangeFollowColumnsToInt < ActiveRecord::Migration[5.2]
  def change
    change_column :follows, :followee_id, "integer USING followee_id::integer"
    change_column :follows, :follower_id, "integer USING follower_id::integer"
  end
end
