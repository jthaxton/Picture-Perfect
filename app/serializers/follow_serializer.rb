class FollowSerializer < ActiveModel::Serializer
  attributes :id, :follower, :followee

  def follower
    object.follower
  end

  def followee
    object.followee
  end
end
