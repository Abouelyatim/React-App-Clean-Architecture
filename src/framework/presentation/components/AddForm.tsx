import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { InsertBookEvents } from "../viewmodel/events/InsertBookEvents";

const AddForm = () => {
  const { isLoggedIn } = useAppSelector((state) => state.AuthSlice);
  const dispatch = useAppDispatch();

  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      titleRef.current?.checkValidity() &&
      priceRef.current?.checkValidity() &&
      descRef.current?.checkValidity()
    ) {
      dispatch(
        InsertBookEvents().insertBookEvent({
          title: titleRef.current.value,
          price: +priceRef.current.value,
          description: descRef.current.value,
        })
      );
      titleRef.current.value = "";
      priceRef.current.value = "";
      descRef.current.value = "";
    }
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={formSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              ref={titleRef}
              id="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              ref={priceRef}
              id="price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows={3}
              required
              ref={descRef}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
