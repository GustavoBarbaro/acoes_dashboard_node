//define a tipagem dos dados

// como deve a interface de um objeto do tipo User 

interface IUser {
    id?: number; // "?" == posso ou nao passar o id
    Nome: string;
    email: string;
}

export default IUser;