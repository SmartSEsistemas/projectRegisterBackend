/*
  Warnings:

  - Added the required column `type_person` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "legal_person_fk";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "natural_person_fk";

-- AlterTable
ALTER TABLE "register_legal_persons" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "register_natural_persons" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "type_person" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
