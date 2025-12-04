const express = require ("express");
const funcionarioController = require("../controllers/funcionarioController");

const rotas = express.Router();

rotas.post("/", funcionarioController.criar );
rotas.get("/", funcionarioController.listar);
rotas.put("/:id", funcionarioController.atualizar);
rotas.delete("/:id", funcionarioController.deletar);

module.exports= rotas;
