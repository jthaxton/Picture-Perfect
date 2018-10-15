json.array! @pictures do |post|
  if post.photo.attached?
    json.extract! post, :id, :body, :user_id, :user
    json.photoUrl post.photo.service_url
  end
end
