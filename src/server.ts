import express, {NextFunction, Request, Response} from 'express';
import routes from './routes/index.js';
import { AppError } from './helper/AppError.js';
const app = express();


app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );

  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'PUT, POST, PATCH, DELETE, GET',
    );
    return res.status(200).end();
  } else return next();
});

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction ) => {
  if(err instanceof AppError)  return response.status(err.statusCode).json({status: "error", message: err.message});

  return response.status(500).json({status: "error",  message: `Internal server error - ${err.message}`});
})

app.listen(3333, () => console.log("Rodando na porta 3333"));