import React from "react";
import { ScoreVarTimeStyled, StarScoreStyled } from "./styles";

import Star1 from "../../assets/images/star1.svg";
import Star2 from "../../assets/images/star2.svg";
import Star3 from "../../assets/images/star3.svg";

function TimeLine({ time }) {
  return (
    <ScoreVarTimeStyled time={time}>
      <StarScoreStyled left={28} src={Star1} />
      <StarScoreStyled left={61} src={Star2} />
      <StarScoreStyled left={95} src={Star3} />
    </ScoreVarTimeStyled>
  );
}

export default TimeLine;
