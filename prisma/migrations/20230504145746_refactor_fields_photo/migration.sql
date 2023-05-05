-- DropForeignKey
ALTER TABLE "register_legal_persons" DROP CONSTRAINT "register_legal_persons_photo_fkey";

-- DropIndex
DROP INDEX "register_legal_persons_photo_key";
