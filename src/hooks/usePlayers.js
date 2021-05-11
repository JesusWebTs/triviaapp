import { useState } from "react";
import ApiConnect from "../services/apiFirebase";
import PlayerScore from "../DTO/playerScore";
const usePlayers = () => {
  const [player, setPlayer] = useState({});
  const [players, setPlayers] = useState([]);
  const createPlayer = async (data) => {
    const player = {
      ...data,
      maxScore: Math.floor(Math.random() * 100),
      scores: [],
    };
    return ApiConnect.post(player)
      .then(() => {
        setPlayer(player);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPlayerInfo = async (uuid) => {
    return ApiConnect.getOne(uuid)
      .then((player) => {
        setPlayer(player);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updatePlayer = (uuid, data) => {
    return ApiConnect.update(uuid, data)
      .then((writeResult) => {
        setPlayer((prevState) => ({ ...prevState, ...data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPlayersScores = async () => {
    return ApiConnect.getAll()
      .then((_players) => {
        setPlayers(_players);
        return players;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    createPlayer,
    getPlayerInfo,
    getPlayersScores,
    updatePlayer,
    player,
    players,
  };
};

export default usePlayers;
