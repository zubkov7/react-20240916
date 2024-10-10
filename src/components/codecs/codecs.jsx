import { Codec } from "../codec/codec";

export const Codecs = ({ codecsIds }) => {
  return (
    <div>
      <h3>Codecs</h3>
      <ul>
        {codecsIds?.map((id) => (
          <li>
            <Codec id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
