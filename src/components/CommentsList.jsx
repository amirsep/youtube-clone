import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <>
      <div>
        {comments.map((comment, index) => (
          <Comment data={comment} key={index} />
        ))}
      </div>
    </>
  );
};

export default CommentsList;
