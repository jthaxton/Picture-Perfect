class Follow < ApplicationRecord
  belongs_to :user,
  foreign_key: :follower_id,
  class_name: :User

  validates :followee_id, uniqueness: {scope: :follower_id}

end
