import "reflect-metadata"
import { DataSource } from "typeorm"

import { username, password } from './credentials'


//mostrar pro typeORM que tem mais uma entidade que ele precisa mapear
import { User } from '../app/entities/User'
import { Acoes_Preco } from '../app/entities/Acoes_Preco'
import { Acoes } from '../app/entities/Acoes'
import { Watchlist } from '../app/entities/Watchlist'

const tabelas = [User, Acoes_Preco, Acoes, Watchlist];

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: username,
    password: password,
    database: "acoes_dashboard",
    // synchronize: true, //aplica as mudanças direto no banco sem usar migrations == ruim
    synchronize: false,
    logging: false,
    entities: tabelas, //veio do arquivo de entities
    // migrations: [CreateUsersTable1744309855154], //vai colocando as migrations aqui dentro (FORMA RUIM)
    migrations: [__dirname + '/migrations/*.{ts,js}'],
    subscribers: [],
})



/*

migrations: [__dirname + '/migrations/*.{ts,js}'],

Evita ter que imputar as migrations toda vez que fizer uma nova

como estou usando o ts-node-dev __dirname corrige o caminho absoluto da pasta

*/