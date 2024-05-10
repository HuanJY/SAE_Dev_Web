package com.SAES4.SAE2.services.board;


import com.SAES4.SAE2.models.list.ListAzu;
import com.SAES4.SAE2.repositories.BoardRepositories;
import com.SAES4.SAE2.models.board.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


// Allows you to reseve data from DB
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

    public List<Board> findUserBoard(Integer userID) {

        return boardRepositories.findByIdUser(userID);
    }

    public void addUserBoard(Board newBoard) {
        Board boardInsert = new Board();

        boardInsert.setIdUser(newBoard.getIdUser());
        boardInsert.setBoardName(newBoard.getBoardName());

        boardRepositories.save(boardInsert);
    }
    public void dropBoard(int idBoard){
        boardRepositories.deleteById(idBoard);
    }
}

