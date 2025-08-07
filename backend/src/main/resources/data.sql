-- Teams
INSERT INTO team (id, name, city) VALUES (1, 'Arsenal', 'London');
INSERT INTO team (id, name, city) VALUES (2, 'Manchester City', 'Manchester');
INSERT INTO team (id, name, city) VALUES (3, 'Liverpool', 'Liverpool');
INSERT INTO team (id, name, city) VALUES (4, 'Chelsea', 'London');
-- After inserting 4 teams
ALTER TABLE team ALTER COLUMN id RESTART WITH 5;


-- Players
INSERT INTO player (id, name, position, team_id) VALUES (1, 'Bukayo Saka', 'Winger', 1);
INSERT INTO player (id, name, position, team_id) VALUES (2, 'Erling Haaland', 'Striker', 2);
INSERT INTO player (id, name, position, team_id) VALUES (3, 'Mohamed Salah', 'Winger', 3);
INSERT INTO player (id, name, position, team_id) VALUES (4, 'Raheem Sterling', 'Winger', 4);

-- Matches
INSERT INTO matches (id, home_team_id, away_team_id, home_score, away_score, match_date)
VALUES (1, 1, 2, 2, 2, '2025-08-01');
INSERT INTO matches (id, home_team_id, away_team_id, home_score, away_score, match_date)
VALUES (2, 3, 4, 1, 0, '2025-08-02');
INSERT INTO matches (id, home_team_id, away_team_id, home_score, away_score, match_date)
VALUES (3, 2, 3, 3, 1, '2025-08-03');

-- Standings with goals
INSERT INTO standing (id, team_id, played, won, drawn, lost, goals_for, goals_against, points)
VALUES (1, 1, 2, 1, 1, 0, 5, 2, 4);

INSERT INTO standing (id, team_id, played, won, drawn, lost, goals_for, goals_against, points)
VALUES (2, 2, 2, 1, 1, 0, 4, 3, 4);

INSERT INTO standing (id, team_id, played, won, drawn, lost, goals_for, goals_against, points)
VALUES (3, 3, 2, 1, 0, 1, 3, 3, 3);

INSERT INTO standing (id, team_id, played, won, drawn, lost, goals_for, goals_against, points)
VALUES (4, 4, 2, 0, 0, 2, 1, 5, 0);

-- Ensure auto-generated IDs start after manually inserted values
ALTER TABLE player ALTER COLUMN id RESTART WITH 5;
ALTER TABLE matches ALTER COLUMN id RESTART WITH 4;
ALTER TABLE standing ALTER COLUMN id RESTART WITH 5;
