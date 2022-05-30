import React from "react";
import { useAppSelector } from "../../store/hooks";

const BookInfo = () => {
  const { readingBook } = useAppSelector((state) => state.BookSlice);
  return (
    <>
      <h2>Book Details</h2>
      {readingBook ? (
        <div>
          <p className="fw-bold">Title: {readingBook.title}</p>
          <p className="fst-italic">Price: {readingBook.price}</p>
          <p className="fw-light">Description: {readingBook.description}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no book selected yet. Please select!
        </div>
      )}
    </>
  );
};

export default BookInfo;
