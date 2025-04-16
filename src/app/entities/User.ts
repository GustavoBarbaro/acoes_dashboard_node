import { Entity, Column, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';
import { Watchlist } from './Watchlist'; 

/*Responsabilidade: Define os modelos que representam as tabelas do banco de dados, 
aqui usando o TypeORM
*/

//descricao, espelho das tabelas do banco de dados

/* Represente uma tabela do banco com notação TypeORM

que mapeia a classe para uma tabela real do banco

*/

@Entity('Usuarios')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100, nullable: false })
    Nome: string;

    @Column('varchar', { length: 100, nullable: false, unique:true })
    email: string;

    //mesmo sem o varchar o typeORM cria como varchar
    @Column({ length: 100, nullable: false })
    senha: string;

    @OneToMany(() => Watchlist, (watchlist) => watchlist.user)
    watchlists: Watchlist[];
}
