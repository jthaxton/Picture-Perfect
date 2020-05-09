class FeedSerializer < ActiveModel::Serializer
  attributes :followed_pictures
  
  def followed_pictures
    pictures = []
    object.followees.map do |followee|
      followee.pictures.each { |picture| pictures << picture }
    end
    pictures
  end

end
