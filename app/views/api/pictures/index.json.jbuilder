json.array! @pictures do |post|
  if post.photo.attached?
    json.extract! post, :id
    json.photoUrl post.photo.service_url
  end
end
