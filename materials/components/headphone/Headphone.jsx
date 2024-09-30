export const Headphone = ({ name, reviews, codecs }) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {reviews.length > 0 && (
        <>
          <h3>Reviews:</h3>
          <ul>
            {reviews.map((reviewText) => (
              <li>{reviewText}</li>
            ))}
          </ul>
        </>
      )}
      <h3>Codecs:</h3>
      <ul>
        {codecs.map((codec) => (
          <li>{codec}</li>
        ))}
      </ul>
    </div>
  );
};
