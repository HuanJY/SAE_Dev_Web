package com.SAES4.SAE2.services.list;

import com.SAES4.SAE2.dto.EditListRequest;
import com.SAES4.SAE2.models.list.ListAzu;
import com.SAES4.SAE2.repositories.ListRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.text.MessageFormat;
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

    public void dropList(int idList) {
        listRepositories.deleteById(idList);
    }
    public void dropAllListByIdBoard(int idBoard){
        listRepositories.deleteAll(this.findallList(idBoard));
    }
    public void modifyList(int idList, EditListRequest editListRequest){
        ListAzu list = listRepositories.findById(idList)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.BAD_REQUEST,
                        MessageFormat.format("List with id: {0} not found", idList)
                ));
        list.setListName(editListRequest.listName());
        listRepositories.save(list);

    }
}
