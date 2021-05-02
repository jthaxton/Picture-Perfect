class FeedSerializer < ActiveModel::Serializer
  attributes :followed_pictures

  def followed_pictures
    pictures = []
    binding.pry
    object.followees.map do |followee|
      followee.pictures.each { |picture| pictures << PictureSerializer.new(picture, :scope => current_user) }
    end
    pictures += object.pictures.map { |picture| PictureSerializer.new(picture, :scope => current_user) }

    pictures.sort_by {|picture| picture.created_at }
  end
end
