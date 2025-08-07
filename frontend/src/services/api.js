import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const getAllTeams = () => axios.get(`${API_BASE}/teams`);
export const getAllPlayers = () => axios.get(`${API_BASE}/players`);
export const getAllMatches = () => axios.get(`${API_BASE}/matches`);
export const getAllStandings = () => axios.get(`${API_BASE}/standings`);

// ✅ Add this:
export const createTeam = (teamData) => axios.post(`${API_BASE}/teams`, teamData);
export async function createTeam(body) {
  const res = await fetch(`${API_BASE_URL}/teams`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Create team failed: ${res.status}`);
  return res.json();
}