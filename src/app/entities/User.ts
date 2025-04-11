import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';

//descricao, espelho das tabelas do banco de dados

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