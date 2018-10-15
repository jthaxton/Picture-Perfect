class Follow < ApplicationRecord
  belongs_to :user,
  foreign_key: :follower_id,
  class_name: :User

end
