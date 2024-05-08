package com.SAES4.SAE2.models.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "UserLogin")
@Getter @Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUser;

    @Column(unique = true, nullable = false)
    private String loginName;

    @Column(nullable = false)
    private String passwordHash;
}
