package com.SAES4.SAE2.services.task;


import com.SAES4.SAE2.models.list.ListAzu;
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

    public void addtask(Task newTask) {

        Task taskInsert = new Task();
        taskInsert.setIdList(newTask.getIdList());
        taskInsert.setIdTask(newTask.getIdTask());
        taskInsert.setTaskName(newTask.getTaskName());
        taskInsert.setTaskDesciption(newTask.getTaskDesciption());

        taskRepositories.save(taskInsert);

    }
}
