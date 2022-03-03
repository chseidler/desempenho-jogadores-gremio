package com.chseidler.desempenhojogadoresgremio.repositories;

import com.chseidler.desempenhojogadoresgremio.entities.Score;
import com.chseidler.desempenhojogadoresgremio.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
