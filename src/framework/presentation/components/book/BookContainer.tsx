import React from "react";
import "./book.css";
import BooksList from "./BooksList";
import BookInfo from "./BookInfo";

const PostContainer = () => {
  return (
    <>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList />
        </div>
        <div className="col side-line">
          <BookInfo />
        </div>
      </div>
    </>
  );
};

export default PostContainer;
