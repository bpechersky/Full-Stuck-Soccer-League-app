package com.example.soccerleague.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "standing")
@Data
public class Standing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    @Column(name = "played")
    private int matchesPlayed;

    @Column(name = "won")
    private int wins;

    @Column(name = "drawn")
    private int draws;

    @Column(name = "lost")
    private int losses;

    @Column(name = "points")
    private int points;

    // Optional if you're not storing these:
    @Column(name = "goals_for", nullable = true)
    private Integer goalsFor;

    @Column(name = "goals_against", nullable = true)
    private Integer goalsAgainst;

    public void setId(Long id) {
        this.id = id;
    }
}
