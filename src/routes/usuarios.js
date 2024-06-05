var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrarMusica", function (req, res) {
    usuarioController.cadastrarMusica(req, res);
})

router.post("/viewArtistaFav", function (req, res) {
    usuarioController.viewArtistaFav(req, res);
})

router.post("/adicionarMusica", function (req, res) {
    usuarioController.adicionarMusica(req, res);
})

router.post("/trazerMusica", function (req, res) {
    usuarioController.trazerMusica(req, res);
})

router.post("/deletarMusica", function (req, res) {
    usuarioController.deletarMusica(req, res);
})

router.post("/musicasFav", function (req, res) {
    usuarioController.musicasFav(req, res);
})

router.post("/qtdMusicas", function (req, res) {
    usuarioController.qtdMusicas(req, res);
})

router.post("/genFavorito", function (req, res) {
    usuarioController.genFavorito(req, res);
})

module.exports = router;