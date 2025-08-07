
package com.example.soccerleague.services;

import com.example.soccerleague.models.Match;
import com.example.soccerleague.models.Team;
import com.example.soccerleague.repositories.MatchRepository;
import org.springframework.stereotype.Service;
import com.example.soccerleague.repositories.TeamRepository;


import java.util.List;
import java.util.Optional;

@Service
public class MatchService {
    private final MatchRepository matchRepository;

    private final TeamRepository teamRepository;


    public MatchService(MatchRepository matchRepository, TeamRepository teamRepository) {
        this.matchRepository = matchRepository;
        this.teamRepository = teamRepository;
    }

    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    public Optional<Match> getMatchById(Long id) {
        return matchRepository.findById(id);
    }

    public Match saveMatch(Match match) {
            Team home = teamRepository.findById(match.getHomeTeam().getId())
                .orElseThrow(() -> new RuntimeException("Home team not found"));
        Team away = teamRepository.findById(match.getAwayTeam().getId())
                .orElseThrow(() -> new RuntimeException("Away team not found"));

        match.setHomeTeam(home);
        match.setAwayTeam(away);

        return matchRepository.save(match);
    }


    public void deleteMatch(Long id) {
        matchRepository.deleteById(id);
    }
}
