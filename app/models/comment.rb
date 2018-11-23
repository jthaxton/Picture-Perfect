class Comment < ApplicationRecord
  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :picture,
  foreign_key: :picture_id,
  class_name: :Picture

end
