var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ", email, senha)
    var instrucao = `
    SELECT * FROM login join usuario on fkUsuario = id where email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function comentar (tituloServer, comentarioServer, dataServer, idUser) {
    console.log("function comentar(): ", tituloServer, comentarioServer, dataServer, idUser);

    var instrucao = `
    INSERT INTO comentario (titulo, txt, dateComment, fkUsuario) VALUES ('${tituloServer}','${comentarioServer}', '${dataServer}', '${idUser}');
    `;
    return database.executar(instrucao);
}

function listarGrafico() {
   var instrucao = `
   SELECT astronauta, COUNT(id) AS usuarios FROM usuario GROUP BY astronauta;`
   return database.executar(instrucao);
}

function listarGrafico2() {
    var instrucao = `
    SELECT planeta, COUNT(id) AS usuarios FROM usuario GROUP BY planeta;`
    return database.executar(instrucao);
 }

function selectComentario () {
    console.log("function selectComentario():");

    var instrucao = `
    SELECT * from comentario JOIN usuario
    ON fkUsuario = id;
    `;
    return database.executar(instrucao);
}


// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, dataNasc, astronauta, planeta) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dataNasc, astronauta, planeta);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, dataNasc, astronauta, planeta) VALUES ('${nome}', '${dataNasc}', '${astronauta}', '${planeta}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarLogin(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarLogin():", email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO login (email, senha) VALUES ('${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    autenticar,
    cadastrar,
    comentar,
    selectComentario,
    cadastrarLogin,
    listarGrafico,
    listarGrafico2
};
