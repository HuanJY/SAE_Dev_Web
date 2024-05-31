package com.SAES4.SAE2.controllers;

import com.SAES4.SAE2.models.board.Board;
import com.SAES4.SAE2.models.user.User;
import com.SAES4.SAE2.services.board.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/board")
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

    @PostMapping("/user")
    public List<Board> findUserBoard(User user) {
        return boardService.findUserBoard(user.getIdUser());
    }

    @PostMapping("/addBoard")
    public void addUserBoard(@RequestBody Board newBoard, User user) {
        newBoard.setIdUser(user.getIdUser());
        boardService.addUserBoard(newBoard, user.getLoginName());
    }

    @DeleteMapping("/{idBoard}/dropBoard")
    public void dropBoard(@PathVariable int idBoard) {
        boardService.dropBoard(idBoard);
    }
}
