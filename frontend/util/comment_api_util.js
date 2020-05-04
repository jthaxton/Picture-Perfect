export const createComment = (com) => $.ajax({
  url: '/api/comments',
  method: 'POST',
  data: com,

});

export const fetchComments = (pic) => $.ajax({ url: `/api/comments/${pic}`, method: 'GET' });

export const fetchAllComments = () => $.ajax({
  url: '/api/comments',
  method: 'GET',
});
