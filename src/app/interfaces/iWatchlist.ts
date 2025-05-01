import { IUser } from "./iUser";
import { IAcao } from "./iAcoes";

export interface IWatchlist {
    id?: number;
    user?: IUser;
    acao: IAcao;
}
