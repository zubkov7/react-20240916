import { useAuth } from "../auth-context/use-auth";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { Codecs } from "../codecs/codecs";

export const Headphone = ({ name, brand, codecs, id }) => {
  const { auth } = useAuth();

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      <Reviews headphoneId={id} />
      {codecs.length ? <Codecs codecsIds={codecs} /> : <div>empty codecs</div>}
      {auth.isAuthorized && (
        <>
          <HeadphoneCounter id={id} />
          <h3>Rating form</h3>
          <ReviewForm headphoneId={id} />
        </>
      )}
    </section>
  );
};
