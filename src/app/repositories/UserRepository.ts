import User from "../entities/User";
import IUser from "../interfaces/iUser";
import { AppDataSource } from "../../database/data-source";


//aqui vai ficar as facilidades do typeORM como selects * from... etc

const userRepository = AppDataSource.getRepository(User);

//criar os metodos para o CRUD

//retorna todos os usuarios
const getUsers = (): Promise<IUser[]> => {
    return userRepository.find();
}


export default { getUsers };