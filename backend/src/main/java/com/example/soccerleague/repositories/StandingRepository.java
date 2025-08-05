
package com.example.soccerleague.repositories;

import com.example.soccerleague.models.Standing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StandingRepository extends JpaRepository<Standing, Long> {
}
