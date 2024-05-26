CREATE TABLE UserLogin(
                           idUser INT AUTO_INCREMENT,
                           loginName VARCHAR(20)  NOT NULL,
                           passwordHash VARCHAR(250)  NOT NULL,
                           PRIMARY KEY(idUser),
                           UNIQUE(loginName)
);

CREATE TABLE Board(
                      idBoard INT AUTO_INCREMENT,
                      boardName VARCHAR(50)  NOT NULL,
                      idUser INT NOT NULL,
                      PRIMARY KEY(idBoard),
                      FOREIGN KEY(idUser) REFERENCES UserLogin(idUser)
);

CREATE TABLE Lists(
                      idList INT AUTO_INCREMENT,
                      listName VARCHAR(50)  NOT NULL,
                      idBoard INT NOT NULL,
                      PRIMARY KEY(idList),
                      FOREIGN KEY(idBoard) REFERENCES Board(idBoard)
);

CREATE TABLE Tasks(
                      idTask INT AUTO_INCREMENT,
                      taskName VARCHAR(50)  NOT NULL,
                      taskDescription VARCHAR(500) ,
                      idList INT NOT NULL,
                      PRIMARY KEY(idTask),
                      FOREIGN KEY(idList) REFERENCES Lists(idList)
);

CREATE TABLE BoardMultiplicity(
                                  idBoard INT,
                                  idUser INT,
                                  PRIMARY KEY(idBoard, idUser),
                                  FOREIGN KEY(idBoard) REFERENCES Board(idBoard),
                                  FOREIGN KEY(idUser) REFERENCES UserLogin(idUser)
);