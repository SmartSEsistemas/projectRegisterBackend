-- DropForeignKey
ALTER TABLE "register_natural_persons" DROP CONSTRAINT "register_natural_persons_photo_fkey";

-- DropIndex
DROP INDEX "register_natural_persons_photo_key";
