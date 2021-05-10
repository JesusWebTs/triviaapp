import { useReducer } from "react";

const initialState = {
  name: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

function useFormState() {
  const [formState, changeField] = useReducer(reducer, initialState);
  return { formState, changeField };
}

export default useFormState;
