class DiscoverFeedSerializer < ActiveModel::Serializer
  attributes :followed_pictures

  def followed_pictures
    pictures = []

    Follow.includes(:follower).where.not(follower_id: object.id)
    users = User.where.not(id: object.id)
    filtered_users = users.select {|user| !object.followees.include?(user) }
    filtered_users.each do |user| 
      user.pictures.order(created_at: :desc).map {|pic| pictures << PictureSerializer.new(pic, :scope => current_user) }
    end
    pictures
  end
end
