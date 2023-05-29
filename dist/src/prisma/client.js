import { PrismaClient } from "@prisma/client";
class PrismaInstance {
    DB = 0;
    nameDb = '';
    setDB(dataBase) {
        this.DB = dataBase === 'db1' ? 5432 : 5433;
        this.nameDb = dataBase;
    }
    prisma() {
        return new PrismaClient({
            datasources: {
                db: {
                    url: `postgresql://root:root@localhost:${this.DB}/${this.nameDb}?schema=public`
                }
            }
        });
    }
}
export default new PrismaInstance();
//# sourceMappingURL=client.js.map