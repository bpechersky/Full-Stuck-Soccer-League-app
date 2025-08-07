import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TeamsPage from './pages/TeamsPage';
import PlayersPage from './pages/PlayersPage';
import MatchesPage from './pages/MatchesPage';
import StandingsPage from './pages/StandingsPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Teams</Link> | <Link to="/players">Players</Link> | <Link to="/matches">Matches</Link> | <Link to="/standings">Standings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TeamsPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/standings" element={<StandingsPage />} />
        <Route path="/add-team" element={<AddTeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
