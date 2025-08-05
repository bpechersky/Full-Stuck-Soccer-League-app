import React, { useEffect, useState } from "react";
import { getAllStandings } from "../services/api";

const StandingsPage = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    getAllStandings().then(setStandings).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Standings</h1>
      <table>
        <thead>
          <tr>
            <th>Team</th><th>Played</th><th>Won</th><th>Drawn</th><th>Lost</th><th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((s) => (
            <tr key={s.id}>
              <td>{s.team.name}</td>
              <td>{s.played}</td>
              <td>{s.won}</td>
              <td>{s.drawn}</td>
              <td>{s.lost}</td>
              <td>{s.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsPage;
