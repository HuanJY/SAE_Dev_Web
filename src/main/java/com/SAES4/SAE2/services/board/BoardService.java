package com.SAES4.SAE2.services.board;


import com.SAES4.SAE2.repositories.BoardRepositories;
import com.SAES4.SAE2.models.board.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


// Allow you to reseve data from DB
@Service
public class BoardService {
    private final BoardRepositories boardRepositories;

    @Autowired
    public BoardService(BoardRepositories boardRepositories) {
        this.boardRepositories = boardRepositories;
    }

    public List<Board> findAllBoards() {
        return (List<Board>) boardRepositories.findAll();
    }

    public Optional<Board> findUserBoard(Integer userID) {

        return boardRepositories.findById(userID);
    }
}

