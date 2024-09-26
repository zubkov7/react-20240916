import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { name, address, review, setAddress, setReview, setName } = useForm();

  return (
    <form>
      <div>
        <span>name</span>
        <input
          type='text'
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div>
        <span>address</span>
        <input
          type='text'
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div>
        <span>review</span>
        <input
          type='text'
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </div>
    </form>
  );
};
