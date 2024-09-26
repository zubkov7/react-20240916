import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/Headphone";
import { Layout } from "../layout/Layout";

export const App = ({ title }) => {
  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        {headphones.map(({ name, reviews, codecs }) => (
          <Headphone name={name} reviews={reviews} codecs={codecs} />
        ))}
      </Layout>
    </div>
  );
};
