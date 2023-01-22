"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var jwt = require("jsonwebtoken");
var SECRET = "SohEuSei";
var app = express();
//convertendo os dados do corpo da requisição para JavaScript Object  
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
function verificaUser(req, resp, next) {
    var token = req.header("x-access-token");
    jwt.verify(token, SECRET, function (err, decoded) {
        if (err) {
            return resp.status(401).end();
        }
        //req.dec = decoded.xxx
        next();
    });
}
//----------------------------------------------------------
var porta = 3001;
app.listen(porta, function () {
    console.log("Servidor rodando na porta " + porta);
});
app.get("/", function (req, resp) {
    resp.sendFile(__dirname + "/views/index.html");
});
app.get("/login", function (req, resp) {
    resp.sendFile(__dirname + "/views/login.html");
});
app.get("/usuario", verificaUser, function (req, resp) {
    resp.json({ msn: "Chegou na rota usuario - GET",
        user: req.query.nmUser,
        codigoUser: req.query.nmCodUser
    });
});
app.get("/usuario/:cod", function (req, resp) {
    resp.json({ msn: "Chegou na rota usuario - GET", codigo: req.params.cod });
});
app.post("/usuario", function (req, resp) {
    resp.json({ msn: "Chegou na rota usuario - POST", user: req.body.nmUser, cod: req.body.nmSenha });
});
app.post("/login", function (req, resp) {
    if (req.body.user == "XPTO" && req.body.pass === 1234) {
        //gerar token - payload
        var token = jwt.sign({ xxx: req.body.user }, SECRET, { expiresIn: 60 });
        return resp.json({ auth: true, token: token });
    }
    resp.status(401).end();
    //nmp i jsonwebtoken
});
