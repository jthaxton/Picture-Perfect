json.array! @picture do |picture|
  json.extract! picture, :id
  json.photoUrl url_for(picture.photo)
end

json.photoUrls @pictures.photos.map { |file| url_for(file) }
