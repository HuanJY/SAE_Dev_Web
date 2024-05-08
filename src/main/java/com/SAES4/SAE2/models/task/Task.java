package com.SAES4.SAE2.models.task;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "Tasks")
public class Task {
    @Id
    @Column(name = "idTask")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idTask;
    @Column(name = "taskName")
    private String taskName;
    @Column(name = "taskDescription")
    private String taskDesciption;
    @Column(name = "idList")
    private Integer idList;

}
