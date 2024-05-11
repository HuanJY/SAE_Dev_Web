package com.SAES4.SAE2.controllers;


import com.SAES4.SAE2.dto.EditListRequest;
import com.SAES4.SAE2.models.list.ListAzu;
import com.SAES4.SAE2.services.list.ListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/list")
public class ListController {

    private final ListService listService;

    @Autowired
    public ListController(ListService listService) {
        this.listService = listService;
    }

    @GetMapping(path = "/{idBoard}")
    public List<ListAzu> findBoardList(@PathVariable Integer idBoard) {
        return listService.findallList(idBoard);
    }

    @PostMapping(path = "/addList")
    public void addList(@RequestBody ListAzu newList) {
        listService.addList(newList);
    }

    @GetMapping(path = "/dropList/{idList}")
    public void dropList(@PathVariable int idList) {
        listService.dropList(idList);
    }
    @GetMapping(path= "/dropAllListByIdBoard/{idBoard}")
    public void dropAllListByIdBoard(@PathVariable int idBoard){
        listService.dropAllListByIdBoard(idBoard);
    }
    @PostMapping(path = "{idList}/modifyList")
    public void modifyList(@PathVariable int idList, @RequestBody EditListRequest editListRequest){
        listService.modifyList(idList, editListRequest);
    }
}
