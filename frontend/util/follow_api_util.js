export const createFollow = (user) => {
  return $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: {user}
  });
}
