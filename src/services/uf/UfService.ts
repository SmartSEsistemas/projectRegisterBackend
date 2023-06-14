import { AppMessage } from '../../utils/AppMessage.js';
import prismaInstance from '../../prisma/client.js';

class UfService {
  async get() {
    return await prismaInstance
      .prisma()
      .register_uf.findMany({ select: { description: true, id: true } })
      .catch(() => {
        throw new AppMessage('Error ao pegar ufs.');
      });
  }
}

export default new UfService();
