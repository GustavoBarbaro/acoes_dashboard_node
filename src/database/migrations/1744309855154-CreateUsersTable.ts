import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1744309855154 implements MigrationInterface {


    //tudo que vai ser feito no banco, criar tabelas, colunas, editar 
    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'Usuarios',
                columns: [ //cada coluna eh um array de objetos
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment' //autoincremet 
                    },
                    {
                        name: 'Nome',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    }
                ]
            })
        )

    }

    //desfazer o que foi feito no up, sempre deixar pronto o desfeito
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Usuarios')
    }

}
