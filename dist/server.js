import 'express-async-errors';
import { ZodError } from 'zod';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';
import { AppMessage } from './utils/AppMessage.js';
import db from './prisma/client.js';
import { limiter } from './middlewares/rateLimit.js';
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
const whitelist = ['http://localhost:3000', process.env.AUTHORIZED];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Acesso não permitido pelo CORS'));
        }
    },
};
app.use(limiter);
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('upload'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, database-name');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).end();
    }
    else {
        return next();
    }
});
app.use((req, res, next) => {
    const database = req.get('database-name');
    if (database === undefined)
        throw new AppMessage('Nome do banco de dados não enviado');
    db.setDB(database);
    next();
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);
app.use((err, request, response, next) => {
    if (err instanceof AppMessage)
        return response.status(err.Status_code).json(err);
    if (err instanceof ZodError) {
        const messages = JSON.parse(err.message).map((error) => `${error.path[0]}: ${error.message}`);
        return response.status(400).json(new AppMessage(messages));
    }
    return response.status(500).json({
        Status_code: 500,
        Message: `Internal server error - ${err.message}`,
    });
});
app.listen(process.env.PORT, () => {
    console.log('Rodando na porta 3333');
});
//# sourceMappingURL=server.js.map