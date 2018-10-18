json.user do
  json.extract! @user, :id, :username
end

json.pictures do
  @user.pictures.each do |picture|
    json.set! picture.id do
      json.extract! picture, :id, :body
      if picture.photo.attached?
        json.photoUrl picture.photo.service_url
      end
    end
  end
end
