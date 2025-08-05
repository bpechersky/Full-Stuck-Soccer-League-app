
package com.example.soccerleague.repositories;

import com.example.soccerleague.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
