export const createFollow = (followee) => $.ajax({
  url: '/api/follows',
  method: 'POST',
  data: followee,
});

export const fetchFollows = () => $.ajax({
  url: '/api/follows',
  method: 'GET',
});

export const unFollow = (follow) => $.ajax({
  url: `/api/follows/${follow}`,
  method: 'DELETE',
});
