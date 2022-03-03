package com.chseidler.desempenhojogadoresgremio.services;

import com.chseidler.desempenhojogadoresgremio.dto.PlayerDTO;
import com.chseidler.desempenhojogadoresgremio.dto.ScoreDTO;
import com.chseidler.desempenhojogadoresgremio.entities.Player;
import com.chseidler.desempenhojogadoresgremio.entities.Score;
import com.chseidler.desempenhojogadoresgremio.entities.User;
import com.chseidler.desempenhojogadoresgremio.repositories.PlayerRepository;
import com.chseidler.desempenhojogadoresgremio.repositories.ScoreRepository;
import com.chseidler.desempenhojogadoresgremio.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class ScoreService {

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Transactional
    public PlayerDTO saveScore(ScoreDTO dto) {

        User user = userRepository.findByEmail(dto.getEmail());
        if (user == null) {
            user = new User();
            user.setEmail(dto.getEmail());
            user = userRepository.saveAndFlush(user);
        }

        Player player = playerRepository.findById(dto.getPlayerId()).get();

        Score score = new Score();
        score.setPlayer(player);
        score.setUser(user);
        score.setValue(dto.getScore());

        score = scoreRepository.saveAndFlush(score);

        double sum = 0.0;
        for (Score s : player.getScores()) {
            sum = sum + s.getValue();
        }

        double avg = sum / player.getScores().size();

        player.setScore(avg);
        player.setCount(player.getScores().size());

        player = playerRepository.save(player);

        return new PlayerDTO(player);
    }
}
