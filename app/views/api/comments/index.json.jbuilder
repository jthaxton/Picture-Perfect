@comments.each do |comment|
    json.set! comment.id do
    json.extract! comment, :id, :comment, :user_id, :picture_id
  end
end