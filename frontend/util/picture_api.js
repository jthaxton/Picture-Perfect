export const deletePicture = (picture) => {
  return $.ajax({
    url: `/api/pictures/${picture}`,
    method: 'DELETE'
  });
}

export const fetchPosts = () => {
  return $.ajax({
   url: "/api/pictures",
   method: "GET"
 });
}
