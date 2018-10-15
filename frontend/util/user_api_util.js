export const fetchUser = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'GET'
  })
}
