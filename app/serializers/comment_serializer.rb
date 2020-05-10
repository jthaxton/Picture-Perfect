class CommentSerializer < ActiveModel::Serializer
  attributes :id, :name, :prof_pic, :comment

  def name
    object.user.username
  end

  def prof_pic
    id = object.user.prof_pic_id
    Picture.find(id).photo.service_url
  end

  def comment
    object.comment
  end
end
