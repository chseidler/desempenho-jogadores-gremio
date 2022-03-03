package com.chseidler.desempenhojogadoresgremio.controllers;

import com.chseidler.desempenhojogadoresgremio.dto.PlayerDTO;
import com.chseidler.desempenhojogadoresgremio.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/players")
public class PlayerController {

    @Autowired
    private PlayerService service;

    @GetMapping
    public Page<PlayerDTO> findAll(Pageable pageable) {
        return service.findAll(pageable);
    }

    @GetMapping(value = "/{id}")
    public PlayerDTO findById(@PathVariable Long id) {
        return service.findById(id);
    }
}
