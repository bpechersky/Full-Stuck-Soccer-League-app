import React, { useEffect, useState } from "react";
import { getAllPlayers } from "../services/api";

const PlayersPage = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getAllPlayers().then(setPlayers).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} ({player.position}) - {player.team?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersPage;
