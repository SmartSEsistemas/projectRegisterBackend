/*
  Warnings:

  - You are about to drop the `registry_change_legal_person` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `registry_change_natural_person` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "registry_change_legal_person" DROP CONSTRAINT "registry_change_legal_person_personId_fkey";

-- DropForeignKey
ALTER TABLE "registry_change_natural_person" DROP CONSTRAINT "registry_change_natural_person_personId_fkey";

-- DropTable
DROP TABLE "registry_change_legal_person";

-- DropTable
DROP TABLE "registry_change_natural_person";

-- CreateTable
CREATE TABLE "register_change_natural_person" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "register_change_natural_person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_change_legal_person" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "register_change_legal_person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "register_change_natural_person_id_key" ON "register_change_natural_person"("id");

-- CreateIndex
CREATE UNIQUE INDEX "register_change_legal_person_id_key" ON "register_change_legal_person"("id");

-- AddForeignKey
ALTER TABLE "register_change_natural_person" ADD CONSTRAINT "register_change_natural_person_personId_fkey" FOREIGN KEY ("personId") REFERENCES "register_natural_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_legal_person" ADD CONSTRAINT "register_change_legal_person_personId_fkey" FOREIGN KEY ("personId") REFERENCES "register_legal_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
