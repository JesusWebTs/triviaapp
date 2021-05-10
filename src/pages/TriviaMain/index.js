import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useLocation } from "wouter";
//Component
import InputForm from "../../components/InputForm";
//Styles
import { TriviaContainerStyled } from "../styles";
//Hook
import usePlayers from "../../hooks/usePlayers";
function TriviaMain() {
  const {
    createPlayer,
    getPlayerInfo,
    getPlayersScores,
    player,
    players,
    updatePlayer,
  } = usePlayers();
  const [_, setLocation] = useLocation();
  const storage = window.localStorage;

  const goPlayGame = (name) => {
    setLocation(`/game/${storage.getItem("name")}`);
  };
  useEffect(() => {
    if (!storage.getItem("uuid")) {
      storage.setItem("uuid", uuid());
    }
    if (
      !!storage.getItem("name") &&
      storage.getItem("name") !== "null" &&
      storage.getItem("name") !== "undefined"
    ) {
      goPlayGame();
    }
    return () => {};
  }, []);
  return (
    <TriviaContainerStyled>
      <InputForm
        onClick={(name) => {
          storage.setItem("name", name);
          createPlayer({
            name: storage.getItem("name"),
            uuid: storage.getItem("uuid"),
          }).then(() => {
            goPlayGame(name);
          });
        }}
      ></InputForm>
    </TriviaContainerStyled>
  );
}

export default TriviaMain;
