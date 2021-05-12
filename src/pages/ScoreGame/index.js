import React, { useEffect } from "react";
//Componenets
import { ScoreTable } from "../../components";
//Styles
import { TriviaContainerStyled } from "../styles";
//Hooks
import usePlayers from "../../hooks/usePlayers";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
function ScoreGame() {
  const { getPlayersScores, players } = usePlayers();
  const [_, setPlayers] = useState([]);
  const history = useHistory();
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
      <ScoreTable data={players} onClick={() => history.push("/")}></ScoreTable>
    </TriviaContainerStyled>
  );
}

export default ScoreGame;
