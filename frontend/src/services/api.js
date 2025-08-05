const API_BASE = "http://localhost:8080/api";

export const getAllTeams = async () => {
  const res = await fetch(`${API_BASE}/teams`);
  return res.json();
};

export const getAllPlayers = async () => {
  const res = await fetch(`${API_BASE}/players`);
  return res.json();
};

export const getAllMatches = async () => {
  const res = await fetch(`${API_BASE}/matches`);
  return res.json();
};

export const getAllStandings = async () => {
  const res = await fetch(`${API_BASE}/standings`);
  return res.json();
};
