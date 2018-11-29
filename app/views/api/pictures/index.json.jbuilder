# json.array! @pictures do |post|
#   if post.photo.attached?
#     json.extract! post, :id, :body, :user_id, :user
#     json.photoUrl post.photo.service_url
#   end
# end

@pictures.each do |post|
  if post.photo.attached?
    json.set! post.id do
      json.extract! post, :id, :body, :user_id, :user
      json.photoUrl post.photo.service_url
      json.comments do
        json.array!(post.comments) do |comment| 
          json.extract! comment, :id, :user, :comment
        end
      end
    end
  end
end
