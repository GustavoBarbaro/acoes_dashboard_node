import { Request, Response } from 'express';
import { YahooFinanceService } from '../services/yahooFinanceService';

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