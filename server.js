import express, { request } from "express";

const app = express();

app.use(express.json())


const users=[]

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json(req.body)

})

app.get('/usuarios/', (req, res) => {

    res.status(200).json(users)
})

/*
1) Tipo de roa /Metodo HTTP
2) Endereço

www.exemplo.com.br/(*contato*)

*/

app.listen(3000);

/*
 Criar nossa API de Usuarios

 
 -Criar um novo usuario
 -Listar todos os usuarios
 -Editar um usuario
 -Deletar um usuario




*/
