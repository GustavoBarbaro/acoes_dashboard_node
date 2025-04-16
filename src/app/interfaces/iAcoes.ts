import { IAcao_Preco } from "./iAcoes_Preco";
import { IWatchlist } from "./iWatchlist";

export interface IAcao {
  id?: number;
  symbol: string;
  Nome: string;
  precos?: IAcao_Preco[];
  watchlists?: IWatchlist[];
}
