package com.SAES4.SAE2.repositories;

import com.SAES4.SAE2.models.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByLoginName(String loginName);
    boolean existsByLoginName(String loginName);
}
