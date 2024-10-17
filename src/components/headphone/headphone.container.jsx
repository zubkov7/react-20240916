import { Headphone } from "./headphone";
import { useGetHeadphoneByIdQuery } from "../../redux/services/api/api";

export const HeadphoneContainer = ({ id }) => {
  const { data } = useGetHeadphoneByIdQuery(id);

  const { name, brand, reviews, codecs } = data || {};

  return (
    <Headphone
      name={name}
      brand={brand}
      reviews={reviews}
      codecs={codecs}
      id={id}
    />
  );
};
