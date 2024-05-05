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
    @Column(name = "id_task")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idTask;
    @Column(name = "task_name")
    private String taskName;
    @Column(name = "task_description")
    private String taskDesciption;
    @Column(name = "id_list")
    private Integer idList;

}
