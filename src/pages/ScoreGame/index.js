import React, { useEffect } from "react";
//Componenets
import { ScoreTable } from "../../components";
//Styles
import { TriviaContainerStyled } from "../styles";
//Hooks
import usePlayers from "../../hooks/usePlayers";
import { useState } from "react";
import { useLocation } from "wouter";
function ScoreGame() {
  const { getPlayersScores, players } = usePlayers();
  const [_, setPlayers] = useState([]);
  const [__, setLocation] = useLocation();
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
      <ScoreTable data={players} onClick={() => setLocation("/")}></ScoreTable>
    </TriviaContainerStyled>
  );
}

export default ScoreGame;
