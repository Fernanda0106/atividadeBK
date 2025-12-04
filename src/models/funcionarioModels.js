const db = require ('../models/db');
const {atualizar} = require ("../controllers/funcionarioController");

const funcionario = {
    //criar um funcionario dentro do banco de dados
    criar: async (nome, cargo) =>{
        console.log ("Tentando fazer o cadastro de ", nome);
        return db.one("INSERT INTO funcionarios (nome, cargo) VALUES ($1, $2) RETURNING id, nome", [nome,cargo] );
    },

    //listar funcionario
    listar:()=> db.any ("SELECT id, nome FROM funcionarios"),

    atualizar: async (id, nome, cargo) =>{
        return db.one ("UPDATE funcionarios SET nome=$1, cargo=$2 WHERE id=$3 RETURNING id, nome", [nome, cargo, id]);
    },
    
    //deletar funcionario dentro do banco de dados
    deletar: (id) => db.none("DELETE FROM funcionarios WHERE id=$1", [id]),
}