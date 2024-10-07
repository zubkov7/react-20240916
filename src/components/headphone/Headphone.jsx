import { useAuth } from "../auth-context/use-auth";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { Codecs } from "../codecs/codecs";
import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/headphones";

export const Headphone = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  const { name, brand, reviews, codecs } = headphone || {};

  const { auth } = useAuth();

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      {reviews.length ? <Reviews reviews={reviews} /> : <div>empty review</div>}
      {codecs.length ? <Codecs codecs={codecs} /> : <div>empty codecs</div>}
      {auth.isAuthorized && (
        <>
          <HeadphoneCounter id={id} />
          <h3>Rating form</h3>
          <ReviewForm />
        </>
      )}
    </section>
  );
};
