-- DropForeignKey
ALTER TABLE "register_legal_persons" DROP CONSTRAINT "register_legal_persons_register_user_id_fkey";

-- DropForeignKey
ALTER TABLE "register_natural_persons" DROP CONSTRAINT "register_natural_persons_register_user_id_fkey";

-- AlterTable
ALTER TABLE "register_legal_persons" ALTER COLUMN "register_user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_natural_persons" ALTER COLUMN "register_user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_register_user_id_fkey" FOREIGN KEY ("register_user_id") REFERENCES "register_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_register_user_id_fkey" FOREIGN KEY ("register_user_id") REFERENCES "register_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
