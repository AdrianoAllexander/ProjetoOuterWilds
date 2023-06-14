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
                        res.json(resultadoAutenticar[0]);


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

function comentar(req, res) {
    var idUser = req.body.idUserServer;
    var tituloServer = req.body.tituloServer;
    var comentarioServer = req.body.comentarioServer;
    var dataServer = req.body.dataCommentServer;

    usuarioModel.comentar(tituloServer, comentarioServer, dataServer, idUser)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(
                    "\nHouve um erro ao realizar o cadastro no banco! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarGrafico(req, res) {
usuarioModel.listarGrafico()
.then(
    function (resultado) {
        res.json(resultado);
    }
).catch(
    function (erro) {
        console.log(
            "\nHouve um erro ao realizar o cadastro no banco! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    }
);
}

function listarGrafico2(req, res) {
    usuarioModel.listarGrafico2()
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(
                "\nHouve um erro ao realizar o cadastro no banco! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    }

function selectComentario(req,res) {
    usuarioModel.selectComentario()
       .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
       }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
       );
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var planeta = req.body.planetaServer;
    var astronauta = req.body.astroServer;
    var dataNasc = req.body.dataServer;

    // // Faça as validações dos valores
    // if (nome == undefined) {
    //     res.status(400).send("Seu nome está undefined!");
    // } else if (email == undefined) {
    //     res.status(400).send("Seu email está undefined!");
    // } else if (senha == undefined) {
    //     res.status(400).send("Sua senha está undefined!");
    // } else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(nome, dataNasc, astronauta, planeta)
        .then(
            function (resultado) {
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
// }

function cadastrarLogin(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // // Faça as validações dos valores
    // if (nome == undefined) {
    //     res.status(400).send("Seu nome está undefined!");
    // } else if (email == undefined) {
    //     res.status(400).send("Seu email está undefined!");
    // } else if (senha == undefined) {
    //     res.status(400).send("Sua senha está undefined!");
    // } else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrarLogin(email, senha)
        .then(
            function (resultado) {
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
    comentar,
    selectComentario,
    cadastrar,
    listarGrafico,
    listarGrafico2,
    cadastrarLogin
}