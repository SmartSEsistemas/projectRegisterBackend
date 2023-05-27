/*
  Warnings:

  - Added the required column `register_permission_id` to the `register_access_authorizations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "register_access_authorizations" ADD COLUMN     "register_permission_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "register_access_authorizations" ADD CONSTRAINT "register_access_authorizations_register_permission_id_fkey" FOREIGN KEY ("register_permission_id") REFERENCES "register_permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
