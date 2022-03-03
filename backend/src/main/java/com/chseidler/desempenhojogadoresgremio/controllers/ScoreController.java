package com.chseidler.desempenhojogadoresgremio.controllers;

import com.chseidler.desempenhojogadoresgremio.dto.PlayerDTO;
import com.chseidler.desempenhojogadoresgremio.dto.ScoreDTO;
import com.chseidler.desempenhojogadoresgremio.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping
    public PlayerDTO saveScore(@RequestBody ScoreDTO dto) {
        PlayerDTO playerDTO = service.saveScore(dto);
        return playerDTO;
    }
}
