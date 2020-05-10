export const fetchUser = (id) => $.ajax({
  url: `/api/users/${id}`,
  method: 'GET',
});

export const fetchAllUsers = () => $.ajax({
  url: '/api/users',
  method: 'GET',
});

export const updateProfPic = (userId, picture) => {
  console.log(userId, picture)
  return $.ajax({
  url: `/api/users/${userId}?picture=${picture}`,
  method: 'PATCH',
});
}