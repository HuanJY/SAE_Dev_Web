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
    @Column(name = "id_board")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idBoard;
    @Column(name = "board_name")
    private String boardName;
    @Column(name = "id_user")
    private Integer idUser;
}
