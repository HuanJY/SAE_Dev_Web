package com.SAES4.SAE2.utils;

import com.SAES4.SAE2.models.user.User;
import com.SAES4.SAE2.repositories.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class SecurityUtil {
    private final UserRepository userRepository;

    public SecurityUtil(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loginName = authentication.getName();
        User user = userRepository.findByLoginName(loginName);
        if (user == null) {
            throw new RuntimeException("Utilisateur non trouvé");
        }
        return user;
    }
}
