var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                                    res.json({
                                        id: resultadoAutenticar[0].idUsuario,
                                        nome: resultadoAutenticar[0].nome,
                                        sobrenome: resultadoAutenticar[0].sobrenome,
                                        email: resultadoAutenticar[0].email,
                                        senha: resultadoAutenticar[0].senha,
                                        artistaFavorito: resultadoAutenticar[0].artistaFavorito,
                                        generoFavorito: resultadoAutenticar[0].generoFavorito,
                                    });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var artista = req.body.artistaServer;
    var genero = req.body.generoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    }   else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (artista == undefined) {
        res.status(400).send("Sua artista está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Seu gênero está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, email, senha, artista, genero)
            .then(
                function (resultado) {
                    console.log(resultado);
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function viewArtistaFav(req, res) {
    
    var tabela = req.body.tabela;

    usuarioModel.viewArtistaFav(tabela)
    .then(
        function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

            if (resultadoAutenticar.length == 1) {
                console.log(resultadoAutenticar);

                            res.json({
                                Michael: resultadoAutenticar[0].Michael,
                                Madonna: resultadoAutenticar[0].Madonna,
                                Freddie: resultadoAutenticar[0].Freddie,
                                Cazuza: resultadoAutenticar[0].Cazuza,
                                Rita: resultadoAutenticar[0].Rita,
                            });
            } else if (resultadoAutenticar.length == 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
        
       
}

function adicionarMusica(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idMusica = req.body.idMusica;
    var idUsuario = req.body.idUsuario;


    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.adicionarMusica(idMusica, idUsuario)
        .then(
            function (resultado) {
                console.log(resultado);
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    
}

function trazerMusica(req, res) {
    var idUsuario = req.body.idUsuario;

    usuarioModel.trazerMusica(idUsuario)
    .then(
        function (resultado) {
            console.log(resultado);
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function deletarMusica(req, res) {
    var idMusica  = req.body.idMusica;
    var idUsuario = req.body.idUsuario;

    usuarioModel.deletarMusica(idMusica, idUsuario)
    .then(
        function (resultado) {
            console.log(resultado);
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function musicasFav(req, res) {
    var tabela  = req.body.tabela;

    usuarioModel.musicasFav(tabela)
    .then(
        function (resultado) {
            console.log(resultado);
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function qtdMusicas(req, res) {
    var idUsuario  = req.body.idUsuario;

    usuarioModel.qtdMusicas(idUsuario)
    .then(
        function (resultado) {
            console.log(resultado);
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


module.exports = {
    autenticar,
    cadastrar,
    viewArtistaFav,
    adicionarMusica,
    deletarMusica,
    trazerMusica,
    musicasFav,
    qtdMusicas
}