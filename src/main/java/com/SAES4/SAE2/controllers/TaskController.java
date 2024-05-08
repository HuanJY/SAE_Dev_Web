package com.SAES4.SAE2.controllers;

import com.SAES4.SAE2.models.task.Task;
import com.SAES4.SAE2.services.task.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/task")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    @GetMapping(path = "/{idList}")
    public List<Task> findAllTaskList(@PathVariable Integer idList) {

        return taskService.findallTaskFromList(idList);
    }
}
