import { PrismaClient } from "@prisma/client";

<<<<<<< HEAD
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
=======
class CreatePrismaInstance {
  newInstance(databaseUrl: string): PrismaClient {
    return new PrismaClient({
      databaseUrl
    })
  }
}

export default new CreatePrismaInstance();
>>>>>>> b9d0cbe40700cd7f77e5031c17922de2267c5bff
