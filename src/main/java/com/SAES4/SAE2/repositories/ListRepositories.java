package com.SAES4.SAE2.repositories;


import com.SAES4.SAE2.models.list.ListAzu;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ListRepositories extends CrudRepository<ListAzu, Integer> {

    List<ListAzu> findByIdBoard (Integer idBoard);
}
