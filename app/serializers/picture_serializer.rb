class PictureSerializer < ActiveModel::Serializer
  attributes :id, :comments, :service_url, :owner, :created_at

  def comments
    object.comments.map { |comment| CommentSerializer.new(comment) }
  end

  def created_at
    object.created_at
  end

  def service_url
    url = object.photo.attached? && object.photo&.service_url
    url || ""
  end

  def owner
    binding.pry
    user = object.user
    profile_picture ||= user.prof_pic_id && Picture.find(user.prof_pic_id).photo.service_url
    {
      name: user.username,
      profile_picture: profile_picture,
      id: user.id,
      followed: scope.followers.any? {|f| f.followee_id == user.id }
    }
  end
end
