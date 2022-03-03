package com.chseidler.desempenhojogadoresgremio.repositories;

import com.chseidler.desempenhojogadoresgremio.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
