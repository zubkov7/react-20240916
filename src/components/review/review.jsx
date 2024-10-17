export const Review = ({ text }) => {
  if (!text) {
    return null;
  }

  return <span>{text}</span>;
};
