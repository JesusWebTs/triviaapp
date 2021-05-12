import { useReducer } from "react";

const storage = window.localStorage;

const initialState = {
  name: storage.getItem("name") ? storage.getItem("name") : "",
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
