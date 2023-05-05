/*
  Warnings:

  - Made the column `userId` on table `register_legal_persons` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `register_natural_persons` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "register_legal_persons" DROP CONSTRAINT "register_legal_persons_userId_fkey";

-- DropForeignKey
ALTER TABLE "register_natural_persons" DROP CONSTRAINT "register_natural_persons_userId_fkey";

-- AlterTable
ALTER TABLE "register_legal_persons" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "register_natural_persons" ALTER COLUMN "userId" SET NOT NULL;

-- CreateTable
CREATE TABLE "registry_change_natural_person" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "registry_change_natural_person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registry_change_legal_person" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "registry_change_legal_person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "registry_change_natural_person_id_key" ON "registry_change_natural_person"("id");

-- CreateIndex
CREATE UNIQUE INDEX "registry_change_legal_person_id_key" ON "registry_change_legal_person"("id");

-- AddForeignKey
ALTER TABLE "registry_change_natural_person" ADD CONSTRAINT "registry_change_natural_person_personId_fkey" FOREIGN KEY ("personId") REFERENCES "register_natural_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registry_change_legal_person" ADD CONSTRAINT "registry_change_legal_person_personId_fkey" FOREIGN KEY ("personId") REFERENCES "register_legal_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
