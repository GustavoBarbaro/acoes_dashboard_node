import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Acoes_Preco } from './Acoes_Preco';
import { Watchlist } from './Watchlist';

@Entity('Acoes')
export class Acoes {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    symbol: string;

    @Column()
    Nome: string;

    @OneToMany(() => Acoes_Preco, (preco) => preco.Acao)
    precos: Acoes_Preco[];

    @OneToMany(() => Watchlist, (lista) => lista.acao)
    watchlists: Watchlist[];
}

// export default Acoes;
