import { Review } from "../review/review";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews?.map((text) => (
          <li>
            <Review text={text} />
          </li>
        ))}
      </ul>
    </div>
  );
};
