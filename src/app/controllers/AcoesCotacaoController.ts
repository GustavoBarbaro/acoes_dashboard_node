import { Request, Response } from 'express';
import { YahooFinanceService } from '../services/yahooFinanceService';
import { AcaoRepository } from '../repositories/AcaoRepository';

class AcoesCotacaoController {
    static async obterCotacao(req: Request, res: Response) {
        const ticker = req.query.ticker as string;

        if (!ticker) {
            return res.status(400).json({ erro: 'Parâmetro "ticker" é obrigatório.' });
        }

        try {
            const cotacao = await YahooFinanceService.buscarCotacao(ticker);
            return res.json(cotacao);
        } catch (error: any) {
            return res.status(500).json({ erro: error.message });
        }
    }
}

export default AcoesCotacaoController;


export class SalvarAcaoBancoController {
    static async salvarCotacao(req: Request, res: Response) {
        const ticker = req.query.ticker as string;

        if (!ticker) {
            return res.status(400).json({ erro: 'Parâmetro "ticker" é obrigatório.' });
        }

        try {
            const cotacao = await YahooFinanceService.buscarCotacao(ticker); //o que volta da API do YahooFinance

            //salvar no banco res.json(cotacao);
            // return res.json(cotacao);

            //chamar um treco que salva no banco e passa as o ticker pra ele

            //Cria uma instancia do repositorio
            //nao pode acessar o metodo direto, como se fosse estatico, pq ele não é
            //metodos nao estaticos precisam ser chamados em uma instancia da classe

            const acaoRepositoryInstance = new AcaoRepository();

            await acaoRepositoryInstance.salvarOuAtualizarAcao(ticker, {
                Data: cotacao.ultimaAtualizacao || new Date(),
                Abertura: cotacao.precoAbertura ?? 0,
                Alta: cotacao.precoMaximo ?? 0,
                Baixa: cotacao.precoMinimo ?? 0,
                Fechamento: cotacao.precoFechamento ?? 0,
                Volume: cotacao.volume ?? 0,
                Acao: { Nome: cotacao.nome ?? 'Nome não informado', symbol: cotacao.ticker ?? 'Ticker não informado' }, // Dados adicionais da ação
            });

            return res.status(200).json({ mensagem: 'Cotação salva com sucesso!' });
            
        } catch (error: any) {
            return res.status(500).json({ erro: error.message });
        }
    }
}

