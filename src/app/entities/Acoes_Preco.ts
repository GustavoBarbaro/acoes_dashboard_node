import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Acoes } from './Acoes';

@Entity('Acoes_Preco')
export class Acoes_Preco {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'date' })
    Data: string;

    @Column('decimal', { precision: 10, scale: 2 })
    Abertura: number;

    @Column('decimal', { precision: 10, scale: 2 })
    Alta: number;

    @Column('decimal', { precision: 10, scale: 2 })
    Baixa: number;

    @Column('decimal', { precision: 10, scale: 2 })
    Fechamento: number;

    @Column()
    Volume: number;

    @ManyToOne(() => Acoes, (acao) => acao.precos)
    Acao: Acoes;
}

export default Acoes_Preco;