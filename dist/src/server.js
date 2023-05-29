import "express-async-errors";
import express from 'express';
import routes from './routes/index.js';
import { AppError } from './helper/AppError.js';
import prismaInstance from './prisma/client.js';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from '../swagger.json';
const app = express();
app.use(express.json());
app.use(express.static('upload'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Entity-Name');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).end();
    }
    else
        return next();
});
app.use((req, res, next) => {
    const entity = req.get('entity-name');
    if (!entity)
        throw new AppError('Nome da entidade não enviada');
    prismaInstance.setDB(entity);
    next();
});
app.use(routes);
app.use((err, request, response, next) => {
    if (err instanceof AppError)
        return response.status(err.statusCode).json({ status: "error", message: err.message });
    return response.status(500).json({ status: "error", message: `Internal server error - ${err.message}` });
});
app.listen(3333, () => console.log("Rodando na porta 3333"));
//# sourceMappingURL=server.js.map