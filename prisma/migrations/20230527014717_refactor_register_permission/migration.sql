/*
  Warnings:

  - Added the required column `updated_at` to the `register_permissions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "register_users" DROP CONSTRAINT "register_users_register_entity_id_fkey";

-- DropForeignKey
ALTER TABLE "register_users" DROP CONSTRAINT "register_users_register_permission_id_fkey";

-- AlterTable
ALTER TABLE "register_permissions" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
