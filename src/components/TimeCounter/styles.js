import styled from "styled-components";

export const StopWatchContainerStyled = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StopWatchStyle = styled.img`
  height: 100%;
`;
export const NeedleStyle = styled.img`
  position: fixed;
  height: 68px;
  transform-origin: center 60px;

  animation-duration: ${({ time }) => `${time}s`};
  animation-name: NeedleRotate;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-play-state: ${({ selected }) => (selected ? "paused" : "running")};

  @keyframes NeedleRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
