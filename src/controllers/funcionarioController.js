const { Activity } = require('react');
const pool = require ('../models/db')
const funcionarios = require ('../models/funcionarioModels')

module.exports={
    async criar (req,res){
        const {nome, cargo} = req.body;
        const novo = funcionario.criar(nome, cargo);
        res.json (novo);
    },

    async listar (req,res){
        const dados = await funcionario.listar();
        res.json(dados);
    },

    async atualizar (req,res){
        const {id} = req.params;
        const {nome, cargo} = req.body;
        const atualizado = await funcionario.atualizar(id, nome, cargo);
        res.json(atualizado);
    }, 

    async deletar (req,res){
        const {id} = req.params;
        const deletado = await funcionario.deletar(id);
        res.json(deletado);
    }
};
