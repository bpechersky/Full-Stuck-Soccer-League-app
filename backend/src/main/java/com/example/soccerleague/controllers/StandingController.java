package com.example.soccerleague.controllers;

import com.example.soccerleague.models.Standing;
import com.example.soccerleague.services.StandingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/standings")
@CrossOrigin
public class StandingController {
    private final StandingService standingService;

    public StandingController(StandingService standingService) {
        this.standingService = standingService;
    }

    @GetMapping
    public List<Standing> getAllStandings() {
        return standingService.getAllStandings();
    }

    @GetMapping("/{id}")
    public Optional<Standing> getStandingById(@PathVariable Long id) {
        return standingService.getStandingById(id);
    }

    @PostMapping
    public Standing createStanding(@RequestBody Standing standing) {
        return standingService.saveStanding(standing);
    }

    @PutMapping("/{id}")
    public Standing updateStanding(@PathVariable Long id, @RequestBody Standing standing) {
        standing.setId(id);
        return standingService.saveStanding(standing);
    }

    @DeleteMapping("/{id}")
    public void deleteStanding(@PathVariable Long id) {
        standingService.deleteStanding(id);
    }
}