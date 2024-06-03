CREATE DATABASE flashback;
SHOW tables;

USE flashback;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    email VARCHAR(45), CONSTRAINT chkEmail CHECK (LOCATE('@', email) > 0),
    senha VARCHAR(45),
    artistaFavorito VARCHAR(45),
    generoFavorito VARCHAR(45)
);

CREATE TABLE musica (
	idMusica INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(45),
    artista VARCHAR(45)
);

INSERT INTO musica VALUES
	(null, 'Rock In Rio', 'Roupa Nova'),
	(null, 'We Are The World', 'USA for Africa'),
	(null, 'Careless Whisper', 'George Michael'),
	(null, 'Rock With You', 'Michael Jackson'),
	(null, 'You Should Be Dancing', 'Bee Gees'),
	(null, 'September', 'Earth, Wind & Fire'),
	(null, 'Macho Man', 'Village People'),
	(null, 'Celebration', 'Kool & The Gang'),
	(null, 'Girls Just Want To Have Fun', 'Cyndi Lauper'),
	(null, 'I Wanna Dance With Somebody', 'Whitney Houston'),
	(null, 'Holiday', 'Madonna'),
	(null, 'Whisky A Go-Go', 'Roupa Nova'),
	(null, 'Lança Perfume', 'Rita Lee'),
	(null, 'Elas por Elas', 'The Fevers'),
	(null, 'Será', 'Legião Urbana'),
	(null, 'Tempos Modernos', 'Lulu Santos'),
	(null, 'A Fórmula do Amor', 'Léo Jaime'),
	(null, 'Bete Balanço', 'Barão Vermelho'),
	(null, 'Vital e Sua Moto', 'Os Paralamas do Sucesso'),
	(null, 'Olhar 43', 'RPM');

SELECT * FROM musica;

CREATE TABLE playlist (
	fkUsuario INT,
    fkMusica INT,
    CONSTRAINT fkUsuarioPlaylist FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT fkMusicaPlaylist FOREIGN KEY (fkMusica) REFERENCES musica(idMusica)
);

SELECT COUNT(fkMusica) FROM playlist WHERE fkUsuario = 1;

SELECT fkMusica FROM playlist WHERE fkUsuario = 1;

INSERT INTO playlist VALUES 
(1, 1);

DELETE FROM playlist WHERE fkUsuario = 1;

SELECT fkMusica FROM playlist WHERE fkUsuario = 1;

SELECT * FROM playlist;

TRUNCATE TABLE usuario;

SELECT * FROM usuario;

SELECT artistaFavorito FROM usuario WHERE idUsuario = 1;


SELECT count(artistaFavorito) FROM usuario WHERE generoFavorito = 'Rock';
SELECT count(artistaFavorito) FROM usuario WHERE generoFavorito = 'Pop';
SELECT count(artistaFavorito) FROM usuario WHERE generoFavorito = 'New Wave';
SELECT count(artistaFavorito) FROM usuario WHERE generoFavorito = 'R&B';
SELECT count(artistaFavorito) FROM usuario WHERE generoFavorito = 'Soul';

SELECT artistaFavorito, generoFavorito 
FROM usuario
ORDER BY idUsuario DESC
LIMIT 1;


SELECT count(artistaFavorito) FROM usuario WHERE artistaFavorito = 'Michael Jackson';
SELECT count(artistaFavorito) FROM usuario WHERE artistaFavorito = 'Madonna';
SELECT count(artistaFavorito) FROM usuario WHERE artistaFavorito = 'Freddie Mercury';
SELECT count(artistaFavorito) FROM usuario WHERE artistaFavorito = 'Cazuza';
SELECT count(artistaFavorito) FROM usuario WHERE artistaFavorito = 'Rita Lee';


CREATE VIEW view_artistas_favoritos AS
SELECT 'Michael Jackson' AS artista_favorito, COUNT(artistaFavorito) AS total FROM usuario WHERE artistaFavorito = 'Michael Jackson'
UNION ALL
SELECT 'Madonna' AS artista_favorito, COUNT(artistaFavorito) AS total FROM usuario WHERE artistaFavorito = 'Madonna'
UNION ALL
SELECT 'Freddie Mercury' AS artista_favorito, COUNT(artistaFavorito) AS total FROM usuario WHERE artistaFavorito = 'Freddie Mercury'
UNION ALL
SELECT 'Cazuza' AS artista_favorito, COUNT(artistaFavorito) AS total FROM usuario WHERE artistaFavorito = 'Cazuza'
UNION ALL
SELECT 'Rita Lee' AS artista_favorito, COUNT(artistaFavorito) AS total FROM usuario WHERE artistaFavorito = 'Rita Lee';

SELECT * FROM view_artistas_favoritos;


ALTER VIEW view_artistas_favoritos AS
SELECT
    SUM(CASE WHEN artistaFavorito = 'Michael Jackson' THEN 1 ELSE 0 END) AS `Michael`,
    SUM(CASE WHEN artistaFavorito = 'Madonna' THEN 1 ELSE 0 END) AS `Madonna`,
    SUM(CASE WHEN artistaFavorito = 'Freddie Mercury' THEN 1 ELSE 0 END) AS `Freddie`,
    SUM(CASE WHEN artistaFavorito = 'Cazuza' THEN 1 ELSE 0 END) AS `Cazuza`,
    SUM(CASE WHEN artistaFavorito = 'Rita Lee' THEN 1 ELSE 0 END) AS `Rita`
FROM usuario;

SELECT 
    fkMusica, titulo,
    COUNT(fkMusica) AS quantidadeEscolhas
FROM playlist
LEFT JOIN musica
ON idMusica = fkMusica
GROUP BY fkMusica
ORDER BY quantidadeEscolhas DESC
LIMIT 3;


SELECT COUNT(fkMusica) AS quantidade
FROM playlist
WHERE fkUsuario = 1;

SELECT 
    fkMusica, titulo,
    COUNT(fkMusica) AS quantidadeEscolhas
FROM playlist
LEFT JOIN musica
ON idMusica = fkMusica
GROUP BY fkMusica
ORDER BY quantidadeEscolhas DESC;