import { useGetReviewsByHeadphoneIdQuery } from "../../redux/services/api/api";
import { Review } from "../review/review";

export const Reviews = ({ headphoneId }) => {
  const { data, isFetching } = useGetReviewsByHeadphoneIdQuery(headphoneId);

  if (isFetching) {
    return "loading";
  }

  return (
    <div>
      <h3>Reviews</h3>
      {data?.map(({ text, id }) => (
        <li key={id}>
          <Review text={text} />
        </li>
      ))}
    </div>
  );
};
