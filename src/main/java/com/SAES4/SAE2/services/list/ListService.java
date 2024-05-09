package com.SAES4.SAE2.services.list;

import com.SAES4.SAE2.models.list.ListAzu;
import com.SAES4.SAE2.repositories.ListRepositories;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ListService {
    private final ListRepositories listRepositories;


    public ListService(ListRepositories listRepositories) {
        this.listRepositories = listRepositories;
    }

    public List<ListAzu> findallList(Integer idBoard) {

        return (List<ListAzu>) listRepositories.findByIdBoard(idBoard);
    }

    public void addList(ListAzu newList) {

        ListAzu listInsert = new ListAzu();
        listInsert.setIdList(newList.getIdList());
        listInsert.setIdBoard(newList.getIdBoard());
        listInsert.setListName(newList.getListName());

        listRepositories.save(listInsert);

    }
}
