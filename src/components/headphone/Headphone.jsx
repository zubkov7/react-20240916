import { useAuth } from "../auth-context/use-auth";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { Codecs } from "../codecs/codecs";

export const Headphone = ({ name, brand, reviews, codecs }) => {
  const { auth } = useAuth();

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      {reviews.length ? (
        <Reviews reviewsIds={reviews} />
      ) : (
        <div>empty review</div>
      )}
      {codecs.length ? <Codecs codecsIds={codecs} /> : <div>empty codecs</div>}
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
