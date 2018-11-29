export const createComment = (com) => {
    
    return $.ajax({
      url: `/api/comments`,
      method: "POST",
      data: com

    });
};

export const fetchComments = (pic) => {
    return $.ajax({ url: `/api/comments/${pic}`, method: "GET" });
};

export const fetchAllComments = () => {
    return $.ajax({
        url: `/api/comments`,
        method: 'GET'
    });
};