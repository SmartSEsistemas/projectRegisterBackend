import instancePrisma from './prisma/client.js';
async function seed() {
    instancePrisma.setDB('db1');
}
seed().catch((e) => console.log(e));
//# sourceMappingURL=seed.js.map