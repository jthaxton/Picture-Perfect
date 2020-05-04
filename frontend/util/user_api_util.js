export const fetchUser = (id) => $.ajax({
  url: `/api/users/${id}`,
  method: 'GET',
});

export const fetchAllUsers = () => $.ajax({
  url: '/api/users',
  method: 'GET',
});

export const updateProfPic = (user, picture) => $.ajax({
  url: `/api/users/${user.id}?picture=${picture.id}`,
  method: 'PATCH',
});
