import React from "react";
import Comment from "./Comment";
const commentsData = [
  {
    name: "sai",
    comment: "lorem hvsghx skxgshg",
    replies: [
      {
        name: "sai",
        comment: "lorem hvsghx skxgshg",
        replies: [{
            name: "sai",
            comment: "lorem hvsghx skxgshg",
            replies: [{
                name: "sai",
                comment: "lorem hvsghx skxgshg",
                replies: [{}],
              },],
          },],
      },
      {
        name: "sai",
        comment: "lorem hvsghx skxgshg",
        replies: [{}],
      },
    ],
  },
  {
    name: "sai",
    comment: "lorem hvsghx skxgshg",
    replies: [{}],
  },
  {
    name: "sai",
    comment: "lorem hvsghx skxgshg",
    replies: [{}],
  },
];
const CommentsList = ({ Comments }) => {
  if (!Comments || !Array.isArray(Comments)) return null;

  return Comments.map((comment, index) => {
    if (!comment || !comment.name || !comment.comment) return null;

    return (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border-l-2 border-l-black ml-5">
          <CommentsList Comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList Comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
