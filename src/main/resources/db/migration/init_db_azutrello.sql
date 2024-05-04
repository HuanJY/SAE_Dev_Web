CREATE TABLE User_Login(
                           id_user INT AUTO_INCREMENT,
                           Login_name VARCHAR(20)  NOT NULL,
                           password_salt VARCHAR(100)  NOT NULL,
                           password_hash VARCHAR(250)  NOT NULL,
                           PRIMARY KEY(id_user),
                           UNIQUE(Login_name)
);

CREATE TABLE Board(
                      id_board INT AUTO_INCREMENT,
                      board_name VARCHAR(50)  NOT NULL,
                      id_user INT NOT NULL,
                      PRIMARY KEY(id_board),
                      FOREIGN KEY(id_user) REFERENCES User_Login(id_user)
);

CREATE TABLE Lists(
                      id_list INT AUTO_INCREMENT,
                      list_name VARCHAR(50)  NOT NULL,
                      id_board INT NOT NULL,
                      PRIMARY KEY(id_list),
                      FOREIGN KEY(id_board) REFERENCES Board(id_board)
);

CREATE TABLE Tasks(
                      id_task INT AUTO_INCREMENT,
                      task_name VARCHAR(50)  NOT NULL,
                      task_description VARCHAR(500) ,
                      id_list INT NOT NULL,
                      PRIMARY KEY(id_task),
                      FOREIGN KEY(id_list) REFERENCES Lists(id_list)
);

CREATE TABLE Tableaux_partagés(
                                  id_board INT,
                                  id_user INT,
                                  PRIMARY KEY(id_board, id_user),
                                  FOREIGN KEY(id_board) REFERENCES Board(id_board),
                                  FOREIGN KEY(id_user) REFERENCES User_Login(id_user)
);