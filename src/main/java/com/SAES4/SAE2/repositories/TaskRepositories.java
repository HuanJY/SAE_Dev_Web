package com.SAES4.SAE2.repositories;

import com.SAES4.SAE2.models.list.ListAzu;
import com.SAES4.SAE2.models.task.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepositories extends CrudRepository<Task, Integer> {

    List<Task> findByIdList(Integer idList);
}
