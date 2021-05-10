import { useState } from "react";

export const useValidateField = ({
  field,
  regExp,
  minSize,
  maxSize,
  example,
  text,
}) => {
  const [error, setError] = useState("");
  const validField = () => {
    if (!text) {
      return setError(`The field ${field} can't be empty.`);
    } else if (regExp && !regExp.test(text)) {
      return setError(
        `The field ${field} is not allowed. Example: ${example}.`
      );
    } else if (minSize && text.length <= minSize) {
      return setError(
        `The field ${field} must contain at least ${minSize} characters.`
      );
    } else if (maxSize && text.length >= maxSize) {
      return setError(
        `The field ${field} must contain less than ${maxSize} characters.`
      );
    } else {
      return setError("");
    }
  };

  return [error, validField, setError];
};
