package com.SAES4.SAE2.models.board;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "Board")
public class Board {
    @Id
    @Column(name = "idBoard")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idBoard;
    
    @Column(name = "boardName")
    private String boardName;
    
    @Column(name = "idUser")
    private Integer idUser;
}
