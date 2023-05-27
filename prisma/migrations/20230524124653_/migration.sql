/*
  Warnings:

  - You are about to drop the column `state` on the `register_legal_persons` table. All the data in the column will be lost.
  - Added the required column `state_uf_id` to the `register_legal_persons` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "register_legal_persons" DROP CONSTRAINT "register_legal_persons_photo_fkey";

-- DropForeignKey
ALTER TABLE "register_natural_persons" DROP CONSTRAINT "register_natural_persons_photo_fkey";

-- AlterTable
ALTER TABLE "register_legal_persons" DROP COLUMN "state",
ADD COLUMN     "state_uf_id" INTEGER NOT NULL,
ALTER COLUMN "photo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_natural_persons" ALTER COLUMN "photo" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_photo_fkey" FOREIGN KEY ("photo") REFERENCES "photos"("name_photo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_photo_fkey" FOREIGN KEY ("photo") REFERENCES "photos"("name_photo") ON DELETE SET NULL ON UPDATE CASCADE;
