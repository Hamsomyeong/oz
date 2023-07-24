package com.fire4bird.oz.user.repository;

import com.fire4bird.oz.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {

    Optional<User> findByEmailAndProvider(String email, String provider);
}
