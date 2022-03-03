package com.chseidler.desempenhojogadoresgremio.services;

import com.chseidler.desempenhojogadoresgremio.dto.PlayerDTO;
import com.chseidler.desempenhojogadoresgremio.entities.Player;
import com.chseidler.desempenhojogadoresgremio.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository repository;

    @Transactional(readOnly = true)
    public Page<PlayerDTO> findAll(Pageable pageable) {
        Page<Player> result = repository.findAll(pageable);
        Page<PlayerDTO> page = result.map(x -> new PlayerDTO(x));
        return page;
    }

    @Transactional(readOnly = true)
    public PlayerDTO findById(Long id) {
        Player result = repository.findById(id).get();
        PlayerDTO dto = new PlayerDTO(result);
        return dto;
    }
}
