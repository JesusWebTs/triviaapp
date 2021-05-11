import styled from "styled-components";

export const CardContainer = styled.div`
  border: 2px solid black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  right: 0;
  left: 0;
  margin: auto;
  border: 2px solid black;
  text-align: center;
  border-radius: 100px;
  width: 70%;
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    top: 50%;
    background-color: black;
    left: 0px;
    transform: translateX(-100.5%);
  }
  &:before {
    transform: translateX(100.5%);
  }
`;

export const QuestionContainerStyled = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const QuestionStyled = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
