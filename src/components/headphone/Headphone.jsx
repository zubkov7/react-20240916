"use client";

import { useAuth } from "../auth-context/use-auth";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { Codecs } from "../codecs/codecs";

export const Headphone = ({ name, brand, codecs, id }) => {
  const { auth } = useAuth();

  if (!auth) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      <Reviews headphoneId={id} />
      {codecs.length ? <Codecs codecsIds={codecs} /> : <div>empty codecs</div>}
      {auth.isAuthorized && (
        <>
          <HeadphoneCounter id={id} />
          <h3>Rating form</h3>
          <ReviewForm headphoneId={id} />
        </>
      )}
    </section>
  );
};

// function withAuthorized(AuthorizedComponent, NotAuthorizedComponent) {
//   const Component = (...props) => {
//     const { auth } = useAuth();

//     if (!auth) {
//       return <NotAuthorizedComponent />;
//     }

//     return <AuthorizedComponent {...props} />;
//   };

//   return Component;
// }

// const ToggleOne = () => {
// 	const [isOn, setIsOn] = useState(off);

// 	return (
// 		<button onClick={() => setIsOn(!isOn)}>switch</button>
// 		{isOn && <span>off</span>}
// 		{!isOn && <span>on</span>}
// 	);
// }

// const ToggleTwo = () => {
// 	const [isOn, setIsOn] = useState(off);

// 	return (
// 		{isOn && <span>off</span>}
// 		{!isOn && <span>on</span>}
// 		<button onClick={() => setIsOn(!isOn)}>switch</button>
// 	);
// }

// const ToggleContext = React.createContext(false);

// const ToggleCompound = ({ children }) => {
// 	const [isOn, setIsOn] = useState(off);

// 	return (
// 		<ToggleContext.Provider value={{ isOn, setIsOn }}>
// 			{children}
// 		</ToggleContext.Provider>
// 	);
// }

// ToggleCompound.TextOn = function TextOn() {
// 	const { isOn } = useContext(ToggleContext);

// 	return isOn ? null : (<span>On</span>);
// }
// ToggleCompound.TextOff = function TextOff() {
// 	const { isOn } = useContext(ToggleContext);

// 	return isOn ? (<span>Off</span>) : null;
// }
// ToggleCompound.TextButton = function TextButton() {
// 	const { setIsOn } = useContext(ToggleContext);

// 	return (<button onClick={() => setIsOn((isOn) => !isOn}>switch</button>);
// }

// ToggleCompound.CustomButton = function TextButton() {
// 	const { setIsOn } = useContext(ToggleContext);

// 	return (<button onClick={() => setIsOn((isOn) => !isOn}>switch</button>);
// }

// const Component = () => {
// 	return (
// 		<ToggleCompound>
// 			<ToggleCompound.TextOn />
// 			<ToggleCompound.TextButton />
// 			<ToggleCompound.TextOff />
// 		</ToggleCompound>
// 	);
// }
