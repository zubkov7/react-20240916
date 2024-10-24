import { Headphone } from "../../../components/headphone/headphone";
import { getHeadphoneById } from "../../services/get-headhone-by-id";

export const generateStaticParams = () => {
  return ["MLXJ2LLA"];
};

export default async function HeadphonePage({ params: { headphoneId } }) {
  const headphone = await getHeadphoneById(headphoneId);

  const { name, brand, reviews, codecs, id } = headphone || {};

  return (
    <Headphone
      name={name}
      brand={brand}
      reviews={reviews}
      codecs={codecs}
      id={id}
    />
  );
}
