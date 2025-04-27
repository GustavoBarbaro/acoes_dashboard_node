import { Request, Response, Router } from 'express';
// import User from '../entities/User';
import UserRepository from '../repositories/UserRepository';
// import IUser from '../interfaces/iUser';

/*consome os metodos de CRUD de repositories

*/

const userRouter = Router();

userRouter.get('/', async (_req, res) => {
    try {
        const users = await UserRepository.getUsers(); //getusers veio de repositoires
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default userRouter;