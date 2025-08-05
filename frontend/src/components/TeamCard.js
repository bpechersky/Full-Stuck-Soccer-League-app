import React from "react";

const TeamCard = ({ team }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
    <h3>{team.name}</h3>
    <p>{team.city}</p>
  </div>
);

export default TeamCard;
