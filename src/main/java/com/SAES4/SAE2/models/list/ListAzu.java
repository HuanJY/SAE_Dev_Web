package com.SAES4.SAE2.models.list;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "Lists")
public class ListAzu {
    @Id
    @Column(name = "id_list")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idList;
    @Column(name = "list_name")
    private String boardName;
    @Column(name = "id_board")
    private Integer idBoard;
}

