import { Acoes } from "../entities/Acoes";
import { IAcao } from "../interfaces/iAcoes";
import Acoes_Preco from "../entities/Acoes_Preco";
import { IAcao_Preco } from "../interfaces/iAcoes_Preco";

import { format } from 'date-fns';

import { AppDataSource } from "../../database/data-source";


export class AcaoRepository {
    private acaoRepository = AppDataSource.getRepository(Acoes);
    private precoRepository = AppDataSource.getRepository(Acoes_Preco);

    /**
     * Verifica se o ticker já existe no banco de dados. Se não existir, cria uma nova entrada.
     * @param ticker - O símbolo da ação (ticker).
     * @param precoData - Os dados de preço da ação.
     */
    async salvarOuAtualizarAcao(ticker: string, precoData: IAcao_Preco): Promise<Acoes> {
        // Verifica se o ticker já existe no banco
        let acao = await this.acaoRepository.findOneBy({ symbol: ticker });

        if (!acao) {
            // Se não existir, cria uma nova entrada na tabela Acoes

            console.log("Criando nova ação no banco de dados:", ticker);

            acao = this.acaoRepository.create({
                symbol: ticker,
                Nome: precoData.Acao?.Nome || "Nome não informado", // Nome pode ser opcional
            });
            await this.acaoRepository.save(acao);
        }

        // Formata a data para o formato 'YYYY-MM-DD'
        const formattedDate = precoData.Data instanceof Date
        ? format(precoData.Data, 'yyyy-MM-dd')
        : precoData.Data;

        // Cria uma nova entrada na tabela Acoes_Preco
        const preco = this.precoRepository.create({
            Data: formattedDate,
            Abertura: precoData.Abertura,
            Alta: precoData.Alta,
            Baixa: precoData.Baixa,
            Fechamento: precoData.Fechamento,
            Volume: precoData.Volume,
            Acao: acao, // Relaciona com a ação criada ou encontrada
        });

        await this.precoRepository.save(preco);

        return acao;
    }
}