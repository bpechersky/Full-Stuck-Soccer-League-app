
package com.example.soccerleague.services;

import com.example.soccerleague.models.Player;
import com.example.soccerleague.models.Team;
import com.example.soccerleague.repositories.TeamRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService {
    private final TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    public List<Team> getTeams(int page, int size) {
        return teamRepository.findAll(PageRequest.of(page, size)).getContent();
    }
    public Team createTeam(Team team) {
        for (Player p : team.getPlayers()) {
            p.setTeam(team);
        }
        return teamRepository.save(team);
    }

    public Optional<Team> getTeamById(Long id) {
        return teamRepository.findById(id);
    }

    public Team saveTeam(Team team) {
        // ✅ Set the back-reference from each Player to its Team
        if (team.getPlayers() != null) {
            for (Player player : team.getPlayers()) {
                player.setTeam(team);
            }
        }

        return teamRepository.save(team);
    }


    public void deleteTeam(Long id) {
        teamRepository.deleteById(id);
    }


}
