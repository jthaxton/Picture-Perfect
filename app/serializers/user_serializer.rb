class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :prof_pic_id, :follows, :pictures

  def follows
    follows = {}
    object.follows.each do |follow|
      follows[follow.id] = follow
    end 
      follows
    end

    def pictures
      pictures = {}
      object.pictures.each do |picture|
        pictures[picture.id] = picture
      end
        pictures
    end
end
