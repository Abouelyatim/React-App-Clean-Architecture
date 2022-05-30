import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { GetBooksEvents } from "../../viewmodel/events/GetBooksEvents";
import { DeleteBookEvents } from "../../viewmodel/events/DeleteBookEvents";
import { readBookEvent } from "../../viewmodel/slices/BookSlice";

const BooksList = () => {
  const { isLoggedIn } = useAppSelector((state) => state.AuthSlice);
  const { isLoading, books } = useAppSelector((state) => state.BookSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetBooksEvents().getBooksEvent());
  }, [dispatch]);

  const bookList =
    books.length > 0
      ? books.map((book) => (
          <li
            className="list-group-item d-flex  justify-content-between align-items-center"
            key={book.id}
          >
            <div>{book.title}</div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                disabled={!isLoggedIn}
                onClick={() => {
                  dispatch(readBookEvent(book));
                }}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                disabled={!isLoggedIn}
                onClick={
                  () => dispatch(DeleteBookEvents().deleteBookEvent(book))
                  //get use case response
                  /*.unwrap()
                    .then((data) => {
                      console.log(data);
                    })
                    .catch((rejectedValue) => {
                      console.log(rejectedValue);
                    })*/
                }
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "no books found";

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "loading..." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
