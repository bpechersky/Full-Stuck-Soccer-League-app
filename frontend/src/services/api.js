import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const getAllTeams = () => axios.get(`${API_BASE}/teams`);
export const getAllPlayers = () => axios.get(`${API_BASE}/players`);
export const getAllMatches = () => axios.get(`${API_BASE}/matches`);
export const getAllStandings = () => axios.get(`${API_BASE}/standings`);

// ✅ Add this:
export const createTeam = (teamData) => axios.post(`${API_BASE}/teams`, teamData);
