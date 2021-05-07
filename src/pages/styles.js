import styled from "styled-components";

export const TriviaContainerStyled = styled.div`
  background-color: white;
  border-radius: 10px;
  bottom: 0;
  overflow: hidden;
  height: 100vh;
  margin: auto;
  position: relative;
  position: sticky;
  top: 0;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 1281px) {
    width: 60%;
  }
`;
