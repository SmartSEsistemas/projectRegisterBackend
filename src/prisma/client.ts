import { PrismaClient } from "@prisma/client";

class CreatePrismaInstance {
  newInstance(databaseUrl: string): PrismaClient {
    return new PrismaClient({
      databaseUrl
    })
  }
}

export default new CreatePrismaInstance();
