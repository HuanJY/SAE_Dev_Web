package com.SAES4.SAE2.services.board;

import com.SAES4.SAE2.models.board.Board;
import com.SAES4.SAE2.repositories.BoardRepositories;
import com.SAES4.SAE2.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    private final BoardRepositories boardRepositories;
    private final UserRepository userRepository;

    @Autowired
    public BoardService(BoardRepositories boardRepositories, UserRepository userRepository) {
        this.boardRepositories = boardRepositories;
        this.userRepository = userRepository;
    }

    public List<Board> findAllBoards() {
        return (List<Board>) boardRepositories.findAll();
    }

    public List<Board> findUserBoardByLoginName(String loginName) {
        int userId = userRepository.findByLoginName(loginName).getIdUser();
        return boardRepositories.findByIdUser(userId);
    }

    public void addUserBoard(Board newBoard, String loginName) {
        int userId = userRepository.findByLoginName(loginName).getIdUser();
        newBoard.setIdUser(userId);
        boardRepositories.save(newBoard);
    }

    public void dropBoard(int idBoard) {
        boardRepositories.deleteById(idBoard);
    }

	public List<Board> findUserBoard(int idUser) {
		return boardRepositories.findByIdUser(idUser);
	}
}

