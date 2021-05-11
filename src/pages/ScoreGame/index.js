import React, { useEffect } from "react";
//Componenets
import { ScoreTable } from "../../components";
//Styles
import { TriviaContainerStyled } from "../styles";
//Hooks
import usePlayers from "../../hooks/usePlayers";
import { useState } from "react";
function ScoreGame() {
  const { getPlayersScores, players } = usePlayers();
  const [_, setPlayers] = useState([]);
  useEffect(() => {
    getPlayersScores()
      .then((players) => {
        setPlayers(players);
      })
      .catch((err) => console.log(err));
    return () => {};
  }, []);
  return (
    <TriviaContainerStyled>
      <ScoreTable data={players}></ScoreTable>
    </TriviaContainerStyled>
  );
}

export default ScoreGame;
