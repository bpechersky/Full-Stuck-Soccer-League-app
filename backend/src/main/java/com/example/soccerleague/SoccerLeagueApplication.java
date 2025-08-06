package com.example.soccerleague;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.example.soccerleague.models")
@EnableJpaRepositories("com.example.soccerleague.repositories")
public class SoccerLeagueApplication {
    public static void main(String[] args) {
        SpringApplication.run(SoccerLeagueApplication.class, args);
    }

}
