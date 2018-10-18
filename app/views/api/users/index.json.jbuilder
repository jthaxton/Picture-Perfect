json.array! @users do |user|
  json.extract! user, :username, :id, :pictures, :follows
end
