import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes/index.js';
import { AppError } from './helper/AppError.js';
import prismaInstance from './prisma/client.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";

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
      title: 'Projeto base',
      version: '1.0.0',
    },
    securityDefinitions: {
      entityNameHeader: {
        type: 'apiKey',
        in: 'header',
        name: 'Entity-name'
      }
    }
  },
  apis: ['./src/routes/**/*.ts']
});

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(express.static('upload'));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
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
  if (!entity) throw new AppError('Nome da entidade não enviada');

  prismaInstance.setDB(entity);
  next();
})

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) return response.status(err.statusCode).json({ status: "error", message: err.message });

  return response.status(500).json({ status: "error", message: `Internal server error - ${err.message}` });
})

app.listen(3333, () => console.log("Rodando na porta 3333"));