import 'express-async-errors';
import { ZodError } from 'zod';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import cors, { CorsOptions } from 'cors';
import express, { type NextFunction, type Request, type Response } from 'express';
import routes from './routes/index.js';
import { AppMessage } from './utils/AppMessage.js';
import db from './prisma/client.js';
import { limiter } from './middlewares/rateLimit.js';

/**
 * @swagger
 *
 * parameters:
 *   entityNameHeader:
 *     in: header
 *     name: Entity-name
 *     description: Nome da entidade a ser consultada
 *     required: true
 *     type: string
 *     default: User
 */

const swaggerDocs = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Base General',
      version: '1.0.0',
    },
    securityDefinitions: {
      entityNameHeader: {
        type: 'apiKey',
        in: 'header',
        name: 'Entity-name',
      },
    },
  },
  apis: ['./src/routes/**/*.ts'],
});

const app = express();

const whitelist = ['http://localhost:3000'];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (origin && whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Acesso não permitido pelo CORS'));
    }
  },
};

app.use(cors(corsOptions));
// app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(express.static('upload'));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, database-name',
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).end();
  } else {
    return next();
  }
});

// Altera o banco de dados de acordo com o header "Entity-Name" for passado
app.use((req: Request, res: Response, next: NextFunction) => {
  const database = req.get('database-name');

  if (database === undefined) throw new AppMessage('Nome do banco de dados não enviado', 400);
  db.setDB(database);
  return next();
});

// Rotas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppMessage) return response.status(err.Status_code).json(err);

  if (err instanceof ZodError) {
    const messages: string | string[] = JSON.parse(err.message).map(
      (error: any) => `${error.path[0]}${error.path[1] ? ' - ' + error.path[1] : ''}: ${error.message}`,
    );
    return response.status(400).json(new AppMessage(messages));
  }

  return response.status(500).json({
    Status_code: 500,
    Message: `Internal server error - ${err.message}`,
  });
});

app.listen(process.env.PORT ?? 3333, () => {
  console.log('Rodando na porta 3333');
});
