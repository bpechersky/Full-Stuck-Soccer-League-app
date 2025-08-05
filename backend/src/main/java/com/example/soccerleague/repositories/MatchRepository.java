
package com.example.soccerleague.repositories;

import com.example.soccerleague.models.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match, Long> {
}
