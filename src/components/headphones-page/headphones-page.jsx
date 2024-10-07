import { useState } from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/headphones";
import { HeadphoneTab } from "../headphone-tab/headphone-tab";

export const HeadphonesPage = ({ title }) => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  const [activeHeadphoneId, setActiveHeadphoneId] = useState(headphonesIds[0]);

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>{title}</h1>

      {headphones.map(({ id }) => (
        <HeadphoneTab
          key={id}
          id={id}
          onClick={() => handleSetActiveHeadphoneId(id)}
          isActive={id === activeHeadphoneId}
        />
      ))}

      <Headphone key={activeHeadphoneId} id={activeHeadphoneId} />
    </div>
  );
};
