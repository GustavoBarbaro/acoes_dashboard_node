import "reflect-metadata"
import { DataSource } from "typeorm"

import { username, password } from './credentials'

//registrar a migration
import { CreateUsersTable1744309855154 } from './migrations/1744309855154-CreateUsersTable';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: username,
    password: password,
    database: "acoes_dashboard",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [CreateUsersTable1744309855154], //vai colocando as migrations aqui dentro
    subscribers: [],
})



//caso fique com muitas migrations, da pra criar um objeto por fora e importar esse objeto