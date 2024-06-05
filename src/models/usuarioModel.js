var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, 
                nome, 
                sobrenome, 
                email, 
                artistaFavorito,
                generoFavorito
                FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, sobrenome, email, senha, artista, genero) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, sobrenome, email, senha, artistaFavorito, generoFavorito) VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}', '${artista}', '${genero}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarMusica(titulo, artista) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (titulo, artista) VALUES ('${titulo}', '${artista}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    let data = autenticar(email, senha)

    console.log(data)

    // var instrucaoSql = `
    //     UPDATE usuario (artistaFavorito) SET ('${artista}') WHERE ;
    // `;
    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // return database.executar(instrucaoSql);
}

function viewArtistaFav(tabela)
{
    var instrucaoSql = `
        SELECT * FROM ${tabela};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adicionarMusica(idMusica, idUsuario) {
    var instrucaoSql = `
        INSERT INTO playlist (fkUsuario, fkMusica) VALUES ('${idUsuario}', '${idMusica}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarMusica(idMusica, idUsuario) {
    var instrucaoSql = `
        DELETE FROM playlist WHERE fkUsuario = ${idUsuario} AND fkMusica = ${idMusica};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function trazerMusica(idUsuario)
{
    var instrucaoSql = `
    SELECT fkMusica FROM playlist WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function musicasFav(tabela) {
    var instrucaoSql = `
        SELECT fkMusica, titulo,
        COUNT(fkMusica) AS quantidadeEscolhas
        FROM ${tabela}
        LEFT JOIN musica
        ON idMusica = fkMusica
        GROUP BY fkMusica
        ORDER BY quantidadeEscolhas DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function qtdMusicas(idUsuario) {
    var instrucaoSql = `
    SELECT COUNT(fkMusica) AS quantidade
    FROM playlist
    WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function genFavorito(idUsuario) {
    var instrucaoSql = `
    SELECT generoFavorito 
    FROM usuario 
    WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarMusica,
    viewArtistaFav,
    adicionarMusica,
    deletarMusica,
    trazerMusica,
    musicasFav,
    qtdMusicas,
    genFavorito
};

