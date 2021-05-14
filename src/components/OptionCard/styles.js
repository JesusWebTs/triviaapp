import styled from "styled-components";

export const CardContainer = styled.div`
  border: 2px solid black;
  border-radius: 40px;
  margin: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: black;  
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 5px;
    top: 50%;
    background-color: black;
    transform: translateX(-100.5%);
  }
  &::after {
    left: 0px;
  }
  &:before {
    right: 0px;
    transform: translateX(100.5%);
  }
`;

export const AnswerContainerStyled = styled.button`
  cursor: pointer;
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  transition: background-color 0.2s linear;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export const AnswerStyled = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
