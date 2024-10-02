export const Codecs = ({ codecs }) => {
  return (
    <div>
      <h3>Codecs</h3>
      <ul>
        {codecs?.map((codec) => (
          <li>{codec}</li>
        ))}
      </ul>
    </div>
  );
};
