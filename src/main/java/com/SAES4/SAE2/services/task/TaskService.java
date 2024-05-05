package com.SAES4.SAE2.services.task;


import com.SAES4.SAE2.models.task.Task;
import com.SAES4.SAE2.repositories.TaskRepositories;
import org.springframework.stereotype.Service;

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
}