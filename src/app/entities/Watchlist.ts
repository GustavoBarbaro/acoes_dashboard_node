// app/entities/Watchlist.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Acoes } from "./Acoes";

@Entity('Watchlist')
export class Watchlist {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => User, (usuario) => usuario.watchlists)
    user: User;

    @ManyToOne(() => Acoes, (stock) => stock.watchlists)
    acao: Acoes;
}
