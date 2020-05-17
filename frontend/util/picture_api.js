export const deletePicture = (picture) => $.ajax({
  url: `/api/pictures/${picture}`,
  method: 'DELETE',
});

export const fetchPosts = () => $.ajax({
  url: '/api/pictures',
  method: 'GET',
});

export const fetchDiscoverPosts = () => $.ajax({
  url: '/api/pictures/discover_posts',
  method: 'GET',
});

export const getPicture = (picture) => $.ajax({
  url: `/api/pictures/${picture.id}`,
  method: 'GET',
});

export const fetchPicturesWithOffset = (offset) => {
  return $.ajax({
  url: `/api/pictures/offset_index`,
  method: 'GET',
  data: { offset }
});}

export const fetchPicturesDiscoverWithOffset = (offset) => {
  return $.ajax({
    url: `/api/pictures/offset_discover_index`,
    method: 'GET',
    data: { offset }
  });}

  export const fetchOwnPostsOffset = (offset) => $.ajax({
    url: '/api/pictures/own_pictures',
    method: 'GET',
    data: { offset }
  });

  export const uploadPicture = (picture) => $.ajax({
    url: '/api/pictures',
    method: 'POST',
    contentType: false,
    processData: false,
    data:  picture
  });