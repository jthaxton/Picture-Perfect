export const createFollow = (user) => {
  return $.ajax({
    url: `/api/${user}/follows`,
    method: 'POST',
    data: {user}
  });
};

export const fetchFollows = () => {
  return $.ajax({
    url: '/api/follows',
    method: 'GET'
  });
};
