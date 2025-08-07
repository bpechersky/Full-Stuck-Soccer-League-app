import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TeamsPage from "./pages/TeamsPage";
import PlayersPage from "./pages/PlayersPage";
import MatchesPage from "./pages/MatchesPage";
import StandingsPage from "./pages/StandingsPage";
import AddTeamPage from "./pages/AddTeamPage";

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Soccer League App</h1>
      <nav style={{ display: "grid", gap: 8, marginTop: 12 }}>
        <Link to="/teams">Teams</Link>
        <Link to="/players">Players</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/standings">Standings</Link>
        <Link to="/add-team">Add Team</Link>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/standings" element={<StandingsPage />} />
        <Route path="/add-team" element={<AddTeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}
