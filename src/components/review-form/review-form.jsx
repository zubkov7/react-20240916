import { useForm } from "./use-form";
import { Counter } from "../counter/counter";

export const ReviewForm = () => {
  const {
    name,
    text,
    rating,
    setText,
    setName,
    incrementRating,
    decrementRating,
  } = useForm();

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
    </form>
  );
};
