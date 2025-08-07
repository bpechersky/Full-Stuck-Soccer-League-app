import React, { useEffect, useState } from 'react';
import { getAllStandings } from '../services/api';

const StandingsPage = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    getAllStandings().then(response => setStandings(response.data));
  }, []);

  return (
    <div>
      <h1>Standings</h1>
      <table>
        <thead>
          <tr><th>Team</th><th>Pts</th></tr>
        </thead>
<tbody>
  {standings.map((s, index) => (
    <tr key={index}>
      <td>{s.teamName}</td>
      <td>{s.points ?? 0}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default StandingsPage;
