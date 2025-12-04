const express = require ('express');
const funcionarioRoutes = require('../routes/funcionarioRoutes');

const app = express();
app.use(express.json());

//rotas
app.use("/funcionarios", funcionarioRoutes);

//iniciar servidor
const PORT = 3000
app.listen(PORT, ()=>
    console.log(`O servidor está rodando em localhost:${PORT}/`));