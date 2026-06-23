package com.example.demo.repository;

import com.example.demo.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository is a toolkit with pre-built database methods
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
