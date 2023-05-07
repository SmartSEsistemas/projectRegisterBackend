/*
  Warnings:

  - You are about to drop the column `register_permissionId` on the `register_roles_permissions` table. All the data in the column will be lost.
  - Added the required column `permission_id` to the `register_roles_permissions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "register_roles_permissions" DROP CONSTRAINT "register_roles_permissions_register_permissionId_fkey";

-- AlterTable
ALTER TABLE "register_roles_permissions" DROP COLUMN "register_permissionId",
ADD COLUMN     "permission_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "register_roles_permissions" ADD CONSTRAINT "register_roles_permissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "register_permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
