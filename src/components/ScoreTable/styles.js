import styled from "styled-components";

export const ScoreTableStyled = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`;
export const ScoreItemStyled = styled.li`
  width: 80%;
  background: black;
  color: white;
  margin: 20px;
  border-radius: 10px;
  text-align: center;
  list-style: inside decimal;
  position: relative;
  padding: 15px;
  border: 2px solid white;
  &:nth-child(5) {
    position: sticky;
    top: 0;
    bottom: 0;
    z-index: 10;
  }
  position: relative;
`;
export const ScoreItemContainerStyled = styled.ol`
  overflow-y: scroll;
  max-height: 90%;
`;

export const Top3Styled = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 15px;
  width: 50px;
`;
