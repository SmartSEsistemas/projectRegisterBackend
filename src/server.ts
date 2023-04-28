import "express-async-errors";
import express, {NextFunction, Request, Response} from 'express';
import routes from './routes/index.js';
import { AppError } from './helper/AppError.js';
import prismaInstance from './prisma/client.js';

const app = express();

app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Entity-Name',
  );
  
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'PUT, POST, PATCH, DELETE, GET',
    );
    return res.status(200).end();
  } else return next();
});

// Altera o banco de dados de acordo com o header "Entity-Name" for passado
app.use((req: Request, res: Response, next: NextFunction) => {
  const entity = req.get('entity-name');
  if(!entity) throw new AppError('Nome da entidade não enviada');

  prismaInstance.setDB(entity);
  next();
})

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction ) => {
  if(err instanceof AppError)  return response.status(err.statusCode).json({status: "error", message: err.message});

  return response.status(500).json({status: "error",  message: `Internal server error - ${err.message}`});
})

app.listen(3333, () => console.log("Rodando na porta 3333"));