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
    @Column(name = "idList")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idList;
    @Column(name = "listName")
    private String listName;
    @Column(name = "idBoard")
    private Integer idBoard;
}

