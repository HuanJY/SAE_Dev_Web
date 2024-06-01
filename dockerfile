# Utiliser une image Maven officielle pour construire l'application
FROM maven:3.8.5-openjdk-17 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de configuration de Maven
COPY pom.xml ./

# Télécharger les dépendances nécessaires
RUN mvn dependency:go-offline -B

# Copier le reste des fichiers de l'application
COPY src ./src

# Construire l'application Spring Boot
RUN mvn package -DskipTests

# Utiliser une image OpenJDK officielle pour exécuter l'application
FROM openjdk:17

# Copier l'application construite dans le conteneur
COPY --from=build /app/target/*.jar /app.jar

# Copier le script SQL dans l'image
COPY ./src/main/resources/db/migration/init_db_azutrello.sql /docker-entrypoint-initdb.d/

# Exposer le port 8080
EXPOSE 8080

# Lancer l'application Spring Boot
ENTRYPOINT ["java", "-jar", "/app.jar"]
