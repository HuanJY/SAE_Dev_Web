package com.SAES4.SAE2.services.task;


import com.SAES4.SAE2.dto.EditTaskRequest;
import com.SAES4.SAE2.models.task.Task;
import com.SAES4.SAE2.repositories.TaskRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.text.MessageFormat;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepositories taskRepositories;


    public TaskService(TaskRepositories taskRepositories) {
        this.taskRepositories = taskRepositories;
    }

    public List<Task> findallTaskFromList(Integer idList) {

        return taskRepositories.findByIdList(idList);
    }

    public void addTask(Task newTask) {

        Task taskInsert = new Task();
        taskInsert.setIdList(newTask.getIdList());
        taskInsert.setIdTask(newTask.getIdTask());
        taskInsert.setTaskName(newTask.getTaskName());
        taskInsert.setTaskDesciption(newTask.getTaskDesciption());

        taskRepositories.save(taskInsert);

    }

    public void dropTask(int idTask) {
        taskRepositories.deleteById(idTask);
    }

    public void dropAllTaskByIdList(int idList) {
        taskRepositories.deleteAll(this.findallTaskFromList(idList));
    }

    public void modifyTask(int taskId, EditTaskRequest editTaskRequest) {
        Task task = taskRepositories.findById(taskId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.BAD_REQUEST,
                        MessageFormat.format("Task with id: {0} not found", taskId)
                ));
        task.setTaskName(editTaskRequest.taskName());
        task.setTaskDesciption(editTaskRequest.taskDescription());
        taskRepositories.save(task);
    }
}

