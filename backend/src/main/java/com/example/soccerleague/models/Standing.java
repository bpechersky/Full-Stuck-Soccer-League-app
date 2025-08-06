package com.example.soccerleague.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;



@Entity
@Table(name = "standing")
@Data
public class Standing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "team_id")
    @JsonIgnoreProperties({"players"})
    private Team team;

    @Column(name = "played")
    private int played;

    @Column(name = "won")
    private int won;

    @Column(name = "drawn")
    private int drawn;

    @Column(name = "lost")
    private int lost;

    @Column(name = "goals_for")
    private Integer goalsFor;

    @Column(name = "goals_against")
    private Integer goalsAgainst;

    @Column(name = "points")
    private int points;


    public Team getTeam() {
        return team;
    }

    public int getPoints() {
        return points;
    }

    public int getPlayed() {
        return played;
    }

    public int getWon() {
        return won;
    }

    public int getDrawn() {
        return drawn;
    }

    public int getLost() {
        return lost;
    }


    public void setId(Long id) {
        this.id = id;
    }
    @Override
    public String toString() {
        return "Standing{" +
                "id=" + id +
                ", team=" + (team != null ? team.getName() : "null") +
                ", points=" + points +
                '}';
    }
}
