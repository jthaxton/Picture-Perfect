class FeedSerializer < ActiveModel::Serializer
  attributes :followed_pictures
  
  def followed_pictures
    pictures = []
    object.followees.map do |followee|
      followee.pictures.each { |picture| pictures << PictureSerializer.new(picture) }
    end

    pictures += object.pictures.map {|picture| PictureSerializer.new(picture) }

    
    pictures
  end

end
