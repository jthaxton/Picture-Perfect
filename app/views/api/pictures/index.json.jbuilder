json.array! @picture, do |picture|
  json.extract! icture, :id, :title
  json.photoUrl url_for(picture.photo)
end
 
