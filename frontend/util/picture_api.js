export const deletePicture = (picture) => $.ajax({
  url: `/api/pictures/${picture}`,
  method: 'DELETE',
});

export const fetchPosts = () => $.ajax({
  url: '/api/pictures',
  method: 'GET',
});

export const getPicture = (picture) => $.ajax({
  url: `/api/pictures/${picture.id}`,
  method: 'GET',
});
