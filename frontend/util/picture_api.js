export const deletePicture = (picture) => {
  return $.ajax({
    url: `/api/pictures/${picture}`,
    method: 'DELETE'
  });
};

export const fetchPosts = () => {
  return $.ajax({
   url: "/api/pictures",
   method: "GET"
 });
};

export const getPicture =  (picture) => {
  return $.ajax({
    url: `/api/pictures/${picture.id}`,
    method: "GET"
  });
};
