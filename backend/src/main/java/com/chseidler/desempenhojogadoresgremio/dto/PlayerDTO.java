package com.chseidler.desempenhojogadoresgremio.dto;

import com.chseidler.desempenhojogadoresgremio.entities.Player;

public class PlayerDTO {

    private Long id;
    private String name;
    private Double score;
    private Integer count;
    private String image;
    private String position;

    public PlayerDTO() {
    }

    public PlayerDTO(Long id, String name, Double score, Integer count, String image, String position) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.count = count;
        this.image = image;
        this.position = position;
    }

    public PlayerDTO(Player player) {
        id = player.getId();
        name = player.getName();
        score = player.getScore();
        count = player.getCount();
        image = player.getImage();
        position = player.getPosition();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
