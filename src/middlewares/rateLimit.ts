import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 20,
  message: 'Limite de requisições excedido. Tente novamente mais tarde.',
});
