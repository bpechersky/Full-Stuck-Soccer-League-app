import React, { useEffect, useState } from 'react';
import { getAllTeams } from '../services/api';
import TeamCard from '../components/TeamCard';

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getAllTeams().then(response => setTeams(response.data));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      {teams.map(team => <TeamCard key={team.id} team={team} />)}
    </div>
  );
};

export default TeamsPage;
