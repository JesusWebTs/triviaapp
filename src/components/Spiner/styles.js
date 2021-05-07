import styled from "styled-components";
export const SpynerContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SpynerStyled = styled.div`
  position: absolute;

  height: 80px;
  width: 80px;
  border-radius: 50%;
  border-top-color: white;
  border-left-color: white;
  border-right-color: white;
  border-bottom-color: transparent;
  border-width: 4px;
  border-style: solid;

  animation-duration: 0.5s;
  animation-name: SpinerSpin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes SpinerSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
