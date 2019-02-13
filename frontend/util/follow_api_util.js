export const createFollow = (followee) => {
  return $.ajax({
    url: `/api/follows`,
    method: 'POST',
    data: followee
  });
};

export const fetchFollows = () => {
  return $.ajax({
    url: '/api/follows',
    method: 'GET'
  });
};

export const unFollow = (follow) => {
  return $.ajax({
    url: `/api/follows/${follow}`,
    method: 'DELETE'
  });
};