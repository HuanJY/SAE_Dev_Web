package com.SAES4.SAE2.repositories;

import com.SAES4.SAE2.models.board.Board;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BoardRepositories extends CrudRepository<Board, Integer> {
    List<Board> findByIdUser(Integer idUser);
}