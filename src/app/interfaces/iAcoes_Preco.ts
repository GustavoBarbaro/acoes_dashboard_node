import { IAcao } from "./iAcoes";

export interface IAcao_Preco {
  id?: number;
  Data: Date; // ou Date, dependendo de como você trabalha com datas
  Abertura: number;
  Alta: number;
  Baixa: number;
  Fechamento: number;
  Volume: number;
  Acao?: IAcao;
}
