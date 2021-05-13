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
  position: relative;

  ${({ own }) => {
    if (own)
      return `
    position: sticky;
    top: 0;
    bottom: 0;
    z-index: 30;
    `;
  }}
`;
export const ScoreItemContainerStyled = styled.ol`
  overflow-y: scroll;
  max-height: 90%;
  text-align: center;
`;

export const Top3Styled = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 50px;
`;

export const PlayAgain = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px;
  margin-top: 25px;
  width: 140px;
  height: 50px;
  border-radius: 5px;
  color: white;
  background-color: black;
  font-size: 20px;
  cursor: pointer;
  z-index: 30;
`;
