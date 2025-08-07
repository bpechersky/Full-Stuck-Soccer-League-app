import React from 'react';

const TeamCard = ({ team }) => (
  <div className="team-card">
    <h3>{team.name}</h3>
    <p>{team.city}</p>
  </div>
);

export default TeamCard;
