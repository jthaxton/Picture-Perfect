json.array! @users do |user|
  json.extract! user, :username, :id, :pictures, :follows
  json.array! prof_pics, :prof_pic_id
end
