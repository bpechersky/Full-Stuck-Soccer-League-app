import React, { useEffect, useState } from "react";
import { getAllMatches } from "../services/api";

const MatchesPage = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getAllMatches().then(setMatches).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Matches</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.homeTeam.name} {match.homeScore} - {match.awayScore} {match.awayTeam.name} ({match.matchDate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchesPage;
