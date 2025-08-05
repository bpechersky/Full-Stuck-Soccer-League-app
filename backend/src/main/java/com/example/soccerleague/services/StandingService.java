
package com.example.soccerleague.services;

import com.example.soccerleague.models.Standing;
import com.example.soccerleague.repositories.StandingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StandingService {
    private final StandingRepository standingRepository;

    public StandingService(StandingRepository standingRepository) {
        this.standingRepository = standingRepository;
    }

    public List<Standing> getAllStandings() {
        return standingRepository.findAll();
    }

    public Optional<Standing> getStandingById(Long id) {
        return standingRepository.findById(id);
    }

    public Standing saveStanding(Standing standing) {
        return standingRepository.save(standing);
    }

    public void deleteStanding(Long id) {
        standingRepository.deleteById(id);
    }
}
