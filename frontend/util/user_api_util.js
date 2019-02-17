export const fetchUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  });
};

export const fetchAllUsers = () => {
  return $.ajax({
    url: '/api/users',
    method: 'GET'
  });
};

export const updateProfPic = (user, picture) => {
  return $.ajax({
    url:`/api/users/${user.id}?picture=${picture.id}`,
    method: 'PATCH',
  });
};
