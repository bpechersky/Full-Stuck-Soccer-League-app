
package com.example.soccerleague.repositories;

import com.example.soccerleague.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
