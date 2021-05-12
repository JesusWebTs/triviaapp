import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useHistory, useLocation } from "react-router-dom";
//Component
import InputForm from "../../components/InputForm";
//Styles
import { TriviaContainerStyled } from "../styles";
//Hook
import usePlayers from "../../hooks/usePlayers";
function TriviaMain() {
  const { createPlayer } = usePlayers();
 
  const history = useHistory();
  const storage = window.localStorage;

  const goPlayGame = (name) => {
    history.push(`game/${name.toLowerCase()}`);
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
          storage.setItem("uuid", uuid());
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
