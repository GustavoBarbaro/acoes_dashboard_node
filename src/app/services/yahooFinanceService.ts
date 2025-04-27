import yahooFinance from 'yahoo-finance2';

export class YahooFinanceService {
    static async buscarCotacao(ticker: string) {
        try {
            const quote = await yahooFinance.quote(`${ticker}.SA`);
            return {
                ticker: quote.symbol,
                nome: quote.shortName,
                precoAtual: quote.regularMarketPrice,
                variacaoPercentual: quote.regularMarketChangePercent?.toFixed(2),
                ultimaAtualizacao: typeof quote.regularMarketTime === 'number'
                    ? new Date(quote.regularMarketTime * 1000)
                    : null, // Retorna null se regularMarketTime não for um número
            };
        } catch (error: any) {
            throw new Error(`Erro ao buscar cotação para ${ticker}: ${error.message}`);
        }
    }
}