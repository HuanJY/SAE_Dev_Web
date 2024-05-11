package com.SAES4.SAE2.controllers;

import com.SAES4.SAE2.dto.EditTaskRequest;
import com.SAES4.SAE2.models.task.Task;
import com.SAES4.SAE2.services.task.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(path = "/addTask")
    public void addTask(@RequestBody Task newTask) {
        taskService.addTask(newTask);
    }

    @GetMapping(path = "/{idTask}/dropTask")
    public void dropTask(@PathVariable int idTask) {
        taskService.dropTask(idTask);
    }
    @GetMapping(path = "/{idList}/dropAllTaskByIdList")
    public void dropAllTaskByIdList(@PathVariable int idList){
        taskService.dropAllTaskByIdList(idList);
    }
    @PostMapping(path = "/{taskId}/modifyTask")
    public void  modifyTask(@PathVariable int taskId, @RequestBody EditTaskRequest editTaskRequest){
        taskService.modifyTask(taskId, editTaskRequest);
    }
}
