import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div>
        <div className="flex items-center shadow-sm p-2">
          <img
            className="h-8 "
            src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
            alt="user-icon"
          />
          <p className="px-2 font-bold">{name} : </p>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
