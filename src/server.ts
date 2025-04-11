import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source';
import routers from './app/routes/routes';

const app = express();

app.use(cors()); //para nao bloquear requisiçoes do frontend

app.use(express.json()); //definindo padrao de dados

//quando chegar uma requisição ele vai redirecionar pra routers
app.use(routers);

//projeto soh inicializa se a conexao com o BD for bem sucedida
AppDataSource.initialize().then(async () => {
    console.log('Database conectada');
    app.listen(3333, () => {
        console.log('Server started on port 3333');
    })
})