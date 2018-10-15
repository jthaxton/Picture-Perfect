json.array! @follows do |follow|
  follow.extract! follow, :id, :followee, :follower
