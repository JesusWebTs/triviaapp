import React, { useEffect, useState } from "react";
//hooks
import useFormState from "./hook/useFormState";
//Styles
import {
  FormStyled,
  InputStyled,
  InputContainerStyled,
  FormButton,
  InputLabelStyled,
  FieldError,
} from "./styles.js";
import { useValidateField } from "./hook/useValidateField";

function InputForm({ direction = "column", onClick }) {
  const { changeField, formState } = useFormState();
  const [submit, setSubmit] = useState(false);

  const [errorName, validName] = useValidateField({
    field: "Name",
    regExp: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    minSize: 5,
    maxSize: 30,
    example: "Jose Perez",
    text: formState.name,
  });

  useEffect(() => {
    validName();
  }, [submit]);

  return (
    <>
      <FormStyled>
        <div>
          <InputContainerStyled>
            <InputStyled
              autoComplete="off"
              value={formState.name}
              onChange={(e) => {
                validName();
                return changeField({
                  type: "CHANGE_NAME",
                  payload: e.target.value,
                });
              }}
              type="text"
              id="name"
            />
            <InputLabelStyled
              filled={formState.name ? true : false}
              htmlFor="name"
            >
              Name:
            </InputLabelStyled>
          </InputContainerStyled>
          {errorName && submit ? <FieldError>{errorName}</FieldError> : null}
        </div>
        <FormButton
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setSubmit(true);
            if (errorName) {
              return false;
            } else {
              onClick(formState.name);
    
            }
          }}
          value="Let's Play!"
        />
      </FormStyled>
    </>
  );
}

export default InputForm;
