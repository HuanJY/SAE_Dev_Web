package com.SAES4.SAE2.controllers;


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
    @GetMapping(path = "/addList")
    public void addList(@RequestBody ListAzu newList) {
        listService.addList(newList);
    }
}
