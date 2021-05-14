import { useState } from "react";
import ApiConnect from "../services/apiFirebase";

const usePlayers = () => {
  const [player, setPlayer] = useState({});
  const [players, setPlayers] = useState([]);
  const createPlayer = async (data) => {
    const player = {
      ...data,
      maxScore: 0,
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
        return player[0];
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updatePlayer = async (uuid, data) => {
    return ApiConnect.update(uuid, data)
      .then((writeResult) => {
        setPlayer((prevState) => ({ ...prevState, ...data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updatePlayerScore = (uuid, data) => {
    getPlayerInfo(uuid).then((_data) => {
      if (data.maxScore > _data.maxScore) {
        updatePlayer(uuid, data);
      }
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
    updatePlayerScore,
    player,
    players,
  };
};

export default usePlayers;
