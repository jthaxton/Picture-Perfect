json.user do
  json.extract! @user, :id, :username, :prof_pic_id
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
  json.extract! @user.follows.count
    
  
end 