import React, { useContext } from "react";
import SelectedContext from "../../context/answerContext";
//Styles
import {
  NeedleStyle,
  StopWatchStyle,
  StopWatchContainerStyled,
} from "./styles";
//Assets
import StopWatchImg from "../../assets/images/stop-watch.svg";
import NeedleImg from "../../assets/images/needle.svg";

function TimeCounter({ time }) {
  const { SelectedAnswerContext } = SelectedContext;
  const selected = useContext(SelectedAnswerContext);
  return (
    <StopWatchContainerStyled>
      <StopWatchStyle src={StopWatchImg} />
      <NeedleStyle src={NeedleImg} time={time} selected={selected} />
    </StopWatchContainerStyled>
  );
}

export default TimeCounter;
