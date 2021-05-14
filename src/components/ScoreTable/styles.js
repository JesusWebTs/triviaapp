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
  .contenedor {
    margin: 2rem auto;
    border: 1px solid #aaa;
    height: 300px;
    width: 90%;
    max-width: 400px;
    background: #f1f2f3;
    overflow: auto;
    box-sizing: border-box;
    padding: 0 1rem;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
  }

  &::-webkit-scrollbar-button:increment,
  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
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
  width: 140px;
  height: 50px;
  border-radius: 5px;
  color: white;
  background-color: black;
  font-size: 20px;
  cursor: pointer;
  z-index: 30;
`;
export const ButtonContainerStyled = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  gap: 5px;
  margin: 30px;
  margin-top: 25px;
`;
