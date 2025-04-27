import { Router } from 'express';
import userRouter from '../controllers/UserController';
import AcoesCotacaoController from '../controllers/AcoesCotacaoController';


const routers = Router();

routers.use('/users', userRouter);
// routers.get('/cotacao', AcoesCotacaoController.obterCotacao);
// routers.get('/cotacao', (req, res) => AcoesCotacaoController.obterCotacao(req, res));
routers.get('/cotacao', async (req, res) => {
    await AcoesCotacaoController.obterCotacao(req, res);
});

export default routers; 