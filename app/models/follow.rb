class Follow < ApplicationRecord
  belongs_to :follower,
             foreign_key: :follower_id,
             class_name: :User

  belongs_to :followee,
             foreign_key: :followee_id,
             class_name: :User

  validates :followee_id, uniqueness: { scope: :follower_id }

  def unfollowed_users_from(user)
    follows = Follow.where.not(follower_id: user.id).where.not(followee_id: user.id)

    follows.map(&:followee)
  end
end
