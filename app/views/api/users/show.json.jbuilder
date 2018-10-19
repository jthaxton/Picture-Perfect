json.user do
  json.extract! @user, :id, :username
end

json.pictures do
  @user.pictures.each do |picture|
    json.set! picture.id do
      json.extract! picture, :id, :body, :user
      if picture.photo.attached?
        json.photoUrl picture.photo.service_url
      end
    end
  end
end

json.follows do
  @user.follows.each do |follow|
    json.set! follow.id do
      json.extract follow, :id, :followee_id, :follower_id
    end
  end
end 
