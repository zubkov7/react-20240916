import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 5,
};

const MAX_RATING_VALUE = 5;
const MIN_RATING_VALUE = 1;

const SET_NAME_ACTION_TYPE = "setName";
const SET_TEXT_ACTION_TYPE = "setText";
const INCREMENT_RATING_ACTION_TYPE = "incrementRating";
const DECREMENT_RATING_ACTION_TYPE = "decrementRating";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_ACTION_TYPE:
      return {
        ...DEFAULT_FORM_VALUE,
        name: payload,
      };
    case SET_TEXT_ACTION_TYPE:
      return {
        ...state,
        text: payload,
      };
    case INCREMENT_RATING_ACTION_TYPE: {
      if (state.rating >= MAX_RATING_VALUE) {
        return state;
      } else {
        return {
          ...state,
          rating: state.rating + 1,
        };
      }
    }
    case DECREMENT_RATING_ACTION_TYPE: {
      if (state.rating <= MIN_RATING_VALUE) {
        return state;
      } else {
        return {
          ...state,
          rating: state.rating - 1,
        };
      }
    }
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const { name, text, rating } = form;

  const setName = (value) => {
    dispatch({ type: SET_NAME_ACTION_TYPE, payload: value });
  };

  const setText = (value) => {
    dispatch({ type: SET_TEXT_ACTION_TYPE, payload: value });
  };

  const incrementRating = (value) => {
    dispatch({ type: INCREMENT_RATING_ACTION_TYPE, payload: value });
  };

  const decrementRating = (value) => {
    dispatch({ type: DECREMENT_RATING_ACTION_TYPE, payload: value });
  };

  return {
    name,
    text,
    rating,
    setName,
    setText,
    incrementRating,
    decrementRating,
  };
};
