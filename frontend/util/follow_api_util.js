export const createFollow = (followee) => {
  return $.ajax({
  url: '/api/follows',
  method: 'POST',
  data: {
    id: followee
  }
});
}

export const fetchFollows = () => $.ajax({
  url: '/api/follows',
  method: 'GET',
});

export const unFollow = (follow) => $.ajax({
  url: `/api/follows/${follow}`,
  method: 'DELETE',
  data: follow
});
