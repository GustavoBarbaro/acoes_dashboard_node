import { Router } from 'express';
import userRouter from '../controllers/UserController';
import AcoesCotacaoController from '../controllers/AcoesCotacaoController';
import { SalvarAcaoBancoController } from '../controllers/AcoesCotacaoController';


const routers = Router();

routers.use('/users', userRouter);
// routers.get('/cotacao', AcoesCotacaoController.obterCotacao);
// routers.get('/cotacao', (req, res) => AcoesCotacaoController.obterCotacao(req, res));

//obter cotacao de uma acao
routers.get('/cotacao', async (req, res) => {
    await AcoesCotacaoController.obterCotacao(req, res);
});


//salvar a cotação de uma ação no banco
routers.post('/salvarCotacao', async (req, res) => {
    await SalvarAcaoBancoController.salvarCotacao(req, res);
});

export default routers; 