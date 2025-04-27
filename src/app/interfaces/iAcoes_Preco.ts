import { IAcao } from "./iAcoes";

export interface IAcao_Preco {
  id?: number;
  Data: string | Date; // aceita stringo ou data
  Abertura: number;
  Alta: number;
  Baixa: number;
  Fechamento: number;
  Volume: number;
  Acao?: IAcao;
}
