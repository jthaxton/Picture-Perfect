class PictureSerializer < ActiveModel::Serializer
  attributes :id, :comments, :service_url, :owner, :followed_by_current_user, :belongs_to_current_user

  def comments
    object.comments.map { |comment| CommentSerializer.new(comment) }
  end

  def service_url
    url = object.photo.attached? && object.photo&.service_url
    url || ""
  end

  def owner
    user = object.user
    profile_picture ||= user.prof_pic_id && Picture.find(user.prof_pic_id).photo.service_url

    {
      id: user.id,
      name: user.username,
      profile_picture: profile_picture,
    }
  end

  def followed_by_current_user
    return true if @instance_options && Follow.where(follower_id: @instance_options.id, followee_id: object.user.id).first

    false
  end

  def belongs_to_current_user
    return true if object.user.id == @instance_options.id

    false
  end
end
