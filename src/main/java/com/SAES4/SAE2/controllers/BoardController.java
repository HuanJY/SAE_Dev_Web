package com.SAES4.SAE2.controllers;

import com.SAES4.SAE2.models.board.Board;
import com.SAES4.SAE2.services.board.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/board")
public class BoardController {

    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping
    public List<Board> findAllBoards() {
        return boardService.findAllBoards();
    }

    @GetMapping(path = "/{userID}")
    public List<Board> findUserBoard(@PathVariable Integer userID) {
        return boardService.findUserBoard(userID);
    }

    @GetMapping(path = "/addBoard")
    public void addUserBoard(@RequestBody Board newBoard) {
        System.out.println("AAAAAAAAAAAAAAAA" + newBoard);
        boardService.addUserBoard(newBoard);

    }
}
