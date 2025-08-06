-- Drop tables if they already exist (for clean start)
DROP TABLE IF EXISTS standing;
DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS player;
DROP TABLE IF EXISTS team;

-- Team table
CREATE TABLE team (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    city VARCHAR(255)
);

-- Player table
CREATE TABLE player (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    position VARCHAR(255),
    team_id BIGINT,
    CONSTRAINT fk_player_team FOREIGN KEY (team_id) REFERENCES team(id)
);

-- Match table
CREATE TABLE matches(
    id BIGINT PRIMARY KEY,
    home_team_id BIGINT,
    away_team_id BIGINT,
    home_score INT,
    away_score INT,
    match_date DATE,
    CONSTRAINT fk_match_home_team FOREIGN KEY (home_team_id) REFERENCES team(id),
    CONSTRAINT fk_match_away_team FOREIGN KEY (away_team_id) REFERENCES team(id)
);

-- Standing table
CREATE TABLE standing (
    id BIGINT PRIMARY KEY,
    team_id BIGINT,
    played INT,
    won INT,
    drawn INT,
    lost INT,
    points INT,
    CONSTRAINT fk_standing_team FOREIGN KEY (team_id) REFERENCES team(id)
);
