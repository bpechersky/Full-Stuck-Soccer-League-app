import React, { useEffect, useState } from 'react';
import { getAllMatches } from '../services/api';

const MatchesPage = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getAllMatches().then(response => setMatches(response.data));
  }, []);

  return (
    <div>
      <h1>Matches</h1>
      <table>
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Date</th>
            <th>Home Score</th>
            <th>Away Score</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id}>
              <td>{match.homeTeam ? match.homeTeam.name : 'N/A'}</td>
              <td>{match.awayTeam ? match.awayTeam.name : 'N/A'}</td>
              <td>{match.matchDate}</td>
              <td>{match.homeScore}</td>
              <td>{match.awayScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesPage;

