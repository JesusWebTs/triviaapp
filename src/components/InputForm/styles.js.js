import styled from "styled-components";
export const InputStyled = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 10px;
  &:focus + label {
    transform: translateY(0%);
    font-size: 15px;
  }
`;
export const InputContainerStyled = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  padding: 2px 0;
  display: flex;
  flex-direction: column-reverse;
`;

export const InputLabelStyled = styled.label`
  transform: ${({ filled = false }) =>
    filled ? `translateY(0%)` : `translateY(100%)`};
  transition-property: transform, font-size;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  margin-left: 10px;
  pointer-events: none;
`;

export const FormStyled = styled.form`
  box-shadow: 0 0 15px 1px black;
  border: 1px solid white;
  border-radius: 15px;
  padding: 20px;
  margin: 50px;
  width: 70%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const FormButton = styled.input`
  align-self: flex-end;
  margin-top: 25px;
  width: 140px;
  height: 50px;
  border-radius: 5px;
  color: white;
  background-color: black;
  font-size: 20px;
  cursor: pointer;
`;

export const InfoContainerStyled = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  width: 100%;
  column-gap: 20px;
  & > div {
    width: 100%;
  }
`;

export const IconStyled = styled.i`
  & svg {
    width: 50px;
    height: 50px;
    color: black;
  }
`;

export const FieldError = styled.div`
  border: 2px solid red;
  order: -1;
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  margin-top: 10px;
  background-color: salmon;
  color: black;

  animation-name: errorAnimated;
  animation-timing-function: ease;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  @keyframes errorAnimated {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
