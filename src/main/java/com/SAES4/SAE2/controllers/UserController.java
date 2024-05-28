package com.SAES4.SAE2.controllers;

import com.SAES4.SAE2.dto.LoginRequest;
import com.SAES4.SAE2.models.user.User;
import com.SAES4.SAE2.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private SecurityContextRepository securityContextRepository;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest, HttpServletRequest request, HttpServletResponse response) {
        User user = userRepository.findByLoginName(loginRequest.getLoginName());
        if (user != null && new BCryptPasswordEncoder().matches(loginRequest.getPassword(), user.getPasswordHash())) {
            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginRequest.getLoginName(), loginRequest.getPassword());
            Authentication authentication = authenticationManager.authenticate(token);
            SecurityContext context = SecurityContextHolder.createEmptyContext();
            context.setAuthentication(authentication);
            SecurityContextHolder.setContext(context);
            securityContextRepository.saveContext(context, request, response);

            return ResponseEntity.ok("Login successful for user: " + user.getLoginName());
        } else {
            return ResponseEntity.badRequest().body("Login failed: Invalid username or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User newUser) {
        if (userRepository.existsByLoginName(newUser.getLoginName())) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }

        String encodedPassword = new BCryptPasswordEncoder().encode(newUser.getPasswordHash());
        newUser.setPasswordHash(encodedPassword);

        userRepository.save(newUser);
        return ResponseEntity.ok("User registered successfully!");
    }
}
