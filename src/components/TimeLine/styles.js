import styled from "styled-components";

export const ScoreVarTimeStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #00000099;
  border-radius: 20px;
  border: 2px solid black;
  scroll-behavior: none;
  padding: 0;
  &:before {
    border-radius: 20px;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(223, 69, 69);
    background: linear-gradient(
      90deg,
      rgba(223, 69, 69, 1) 0%,
      rgba(218, 222, 32, 1) 33%,
      rgba(218, 222, 32, 1) 66%,
      rgba(30, 207, 14, 1) 100%
    );
    /* clip-path: polygon(
      0 0,
      ${() => `${50}%`} 0,
      ${() => `${50}%`} 100%,
      0% 100%
    ); */

    animation-duration: ${({ time }) => `${time}s`};
    animation-name: TimeLine;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-play-state: ${({ selected }) => (selected ? "paused" : "running")};
    @keyframes TimeLine {
      0% {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
      100% {
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
      }
    }
  }
`;

export const StarScoreStyled = styled.img`
  position: absolute;
  transform: translatey(-50%);
  bottom: 0;
  left: ${({ left }) => `${left}%`};
  margin: auto;
  height: 105%;
`;
