class PictureSerializer < ActiveModel::Serializer
  attributes :id, :comments, :service_url, :owner

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
      name: user.username,
      profile_picture: profile_picture
    }
  end
end
