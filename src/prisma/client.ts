import { PrismaClient } from "@prisma/client";

class PrismaInstance {
  private DB: number = 0;
  private nameDb: string = '';

  setDB(dataBase: string) {
    this.DB = dataBase === 'db1' ? 5432 : 5433;
    this.nameDb = dataBase
  }

  prisma(): PrismaClient {
    return new PrismaClient({
      datasources: {
        db: {
          url: `postgresql://root:root@localhost:${this.DB}/${this.nameDb}?schema=public`
        }
      }
    })
  }


}

export default new PrismaInstance();
