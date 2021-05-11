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
  const { createPlayer } = usePlayers();
  const [_, setLocation] = useLocation();
  const storage = window.localStorage;

  const goPlayGame = (name) => {
    setLocation(`game/${name.toLowerCase()}`);
  };

  useEffect(() => {
    const invalidNames = ["", "undefined", "null"];
    const name = storage.getItem("name");
    if (!invalidNames.includes(name)) {
      goPlayGame(name);
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
            uuid: uuid(),
          }).then(() => {
            goPlayGame(name);
          });
        }}
      ></InputForm>
    </TriviaContainerStyled>
  );
}

export default TriviaMain;
