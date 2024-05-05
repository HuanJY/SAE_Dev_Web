package com.SAES4.SAE2.controllers;

import com.SAES4.SAE2.dto.LoginRequest;
import com.SAES4.SAE2.models.user.User;
import com.SAES4.SAE2.repositories.UserRepository;
import com.SAES4.SAE2.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationService authService;
    
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User newUser) {
        if (userRepository.existsByLoginName(newUser.getLoginName())) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }

        String encodedPassword = authService.hashPassword(newUser.getPasswordHash());
        newUser.setPasswordHash(encodedPassword);

        userRepository.save(newUser);
        return ResponseEntity.ok("User registered successfully!");
    }


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userRepository.findByLoginName(loginRequest.getLoginName());
        if (user != null && authService.checkPassword(loginRequest.getPassword(), user.getPasswordHash())) {
            return ResponseEntity.ok("Login successful for user: " + user.getLoginName());
        } else {
            return ResponseEntity.badRequest().body("Login failed: Invalid username or password");
        }
    }

}
