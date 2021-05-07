import React from "react";
import {
  NeedleStyle,
  StopWatchStyle,
  StopWatchContainerStyled,
} from "./styles";

import StopWatchImg from "../../assets/images/stop-watch.svg";
import NeedleImg from "../../assets/images/needle.svg";

function TimeCounter({time}) {
  return (
    <StopWatchContainerStyled>
      <StopWatchStyle src={StopWatchImg} />
      <NeedleStyle src={NeedleImg} time={time} />
    </StopWatchContainerStyled>
  );
}

export default TimeCounter;
