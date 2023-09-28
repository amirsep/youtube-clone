import React from "react";
import Comments from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Amir",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Amir",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Amir",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Amir",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Amir",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Amir",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Amir",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Amir",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Amir",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Amir",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Amir",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Amir",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Amir",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <>
      <div className="p-2 m-5">
        <h1 className="text-xl font-bold"> Comments: </h1>
        <CommentsList comments={commentsData} />
      </div>
    </>
  );
};

export default CommentsContainer;
