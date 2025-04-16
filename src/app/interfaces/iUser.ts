import { IWatchlist } from "./iWatchlist";

//define a tipagem dos dados

// como deve a interface de um objeto do tipo User 

export interface IUser {
    id?: number; // "?" == posso ou nao passar o id
    Nome: string;
    email: string;
    senha: string;
    watchlists?: IWatchlist[];
}
