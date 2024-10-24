import { HeadphoneTab } from "../headphone-tab/headphone-tab";

export const HeadphonesPage = ({ title, children, headphones }) => {
  return (
    <div>
      <h1>{title}</h1>

      {headphones.map(({ name, id }) => (
        <HeadphoneTab key={id} id={id} name={name} />
      ))}

      {children}
    </div>
  );
};
