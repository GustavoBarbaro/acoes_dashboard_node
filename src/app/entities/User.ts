import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';

/*Responsabilidade: Define os modelos que representam as tabelas do banco de dados, 
aqui usando o TypeORM
*/

//descricao, espelho das tabelas do banco de dados

/* Represente uma tabela do banco com notação TypeORM

que mapeia a classe para uma tabela real do banco

*/

@Entity('Usuarios')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100, nullable: false })
    Nome: string;

    @Column('varchar', { length: 100, nullable: false })
    email: string;
}

export default User;