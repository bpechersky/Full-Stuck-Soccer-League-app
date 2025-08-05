import React, { useEffect, useState } from "react";
import { getAllTeams } from "../services/api";
import TeamCard from "../components/TeamCard";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getAllTeams().then(setTeams).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <div>
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
