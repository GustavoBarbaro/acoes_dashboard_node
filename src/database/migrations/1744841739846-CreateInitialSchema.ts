import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialSchema1744841739846 implements MigrationInterface {
    name = 'CreateInitialSchema1744841739846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Acoes_Preco\` (\`id\` int NOT NULL AUTO_INCREMENT, \`Data\` date NOT NULL, \`Abertura\` decimal(10,2) NOT NULL, \`Alta\` decimal(10,2) NOT NULL, \`Baixa\` decimal(10,2) NOT NULL, \`Fechamento\` decimal(10,2) NOT NULL, \`Volume\` int NOT NULL, \`acaoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Acoes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`symbol\` varchar(255) NOT NULL, \`Nome\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_cf4bb02086b9db44d8ecdbcfc4\` (\`symbol\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Watchlist\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NULL, \`acaoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Usuarios\` (\`id\` int NOT NULL AUTO_INCREMENT, \`Nome\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`senha\` varchar(100) NOT NULL, UNIQUE INDEX \`IDX_ca3e46c76538a31e4834844750\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Acoes_Preco\` ADD CONSTRAINT \`FK_65ba8a5beccbece07433ce70e63\` FOREIGN KEY (\`acaoId\`) REFERENCES \`Acoes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Watchlist\` ADD CONSTRAINT \`FK_79019b2f71ea35d6e9bd98a5e2d\` FOREIGN KEY (\`userId\`) REFERENCES \`Usuarios\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Watchlist\` ADD CONSTRAINT \`FK_ad79bf050fa65865c917e5c1a32\` FOREIGN KEY (\`acaoId\`) REFERENCES \`Acoes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Watchlist\` DROP FOREIGN KEY \`FK_ad79bf050fa65865c917e5c1a32\``);
        await queryRunner.query(`ALTER TABLE \`Watchlist\` DROP FOREIGN KEY \`FK_79019b2f71ea35d6e9bd98a5e2d\``);
        await queryRunner.query(`ALTER TABLE \`Acoes_Preco\` DROP FOREIGN KEY \`FK_65ba8a5beccbece07433ce70e63\``);
        await queryRunner.query(`DROP INDEX \`IDX_ca3e46c76538a31e4834844750\` ON \`Usuarios\``);
        await queryRunner.query(`DROP TABLE \`Usuarios\``);
        await queryRunner.query(`DROP TABLE \`Watchlist\``);
        await queryRunner.query(`DROP INDEX \`IDX_cf4bb02086b9db44d8ecdbcfc4\` ON \`Acoes\``);
        await queryRunner.query(`DROP TABLE \`Acoes\``);
        await queryRunner.query(`DROP TABLE \`Acoes_Preco\``);
    }

}
