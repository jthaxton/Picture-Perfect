export const deletePicture = (picture) => {
  return $.ajax({
    url: `/api/pictures/${picture}`,
    method: 'DELETE'
  });
}
