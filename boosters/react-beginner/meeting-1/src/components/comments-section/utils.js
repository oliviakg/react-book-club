export const text = {
  comments: "Comments",
  noComments: "No comments at this time"
};

export const makeTextComments = ({ comments }) => 
  comments.length === 0 ? text.noComments : text.comments;

