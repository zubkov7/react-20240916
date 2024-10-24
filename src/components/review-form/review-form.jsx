"use client";

import { useForm } from "./use-form";
import { Counter } from "../counter/counter";
import { useAddReviewMutation } from "../../redux/services/api/api";

export const ReviewForm = ({ headphoneId }) => {
  const {
    name,
    text,
    rating,
    setText,
    setName,
    incrementRating,
    decrementRating,
  } = useForm();

  const [addReview] = useAddReviewMutation();

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <span>name</span>
        <input
          type='text'
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div>
        <span>review</span>
        <input
          type='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <Counter
          value={rating}
          increment={incrementRating}
          decrement={decrementRating}
        />
      </div>
      <button
        onClick={() =>
          addReview({
            headphoneId,
            review: {
              user: "jg4985gj94",
              text,
              rating: 5,
            },
          })
        }
      >
        submit
      </button>
    </form>
  );
};
