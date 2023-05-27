/*
  Warnings:

  - You are about to drop the column `legal_nature_id` on the `register_admin_types` table. All the data in the column will be lost.
  - You are about to drop the column `person_id` on the `register_change_legal_person` table. All the data in the column will be lost.
  - You are about to drop the column `person_id` on the `register_change_natural_person` table. All the data in the column will be lost.
  - You are about to drop the column `organization_chart_id` on the `register_change_organization_charts` table. All the data in the column will be lost.
  - You are about to drop the column `resp_id` on the `register_change_resp_entities` table. All the data in the column will be lost.
  - You are about to drop the column `resp_organization_chart_id` on the `register_change_resp_organization_charts` table. All the data in the column will be lost.
  - You are about to drop the column `entity_type_id` on the `register_entities` table. All the data in the column will be lost.
  - You are about to drop the column `legal_nature_id` on the `register_entities` table. All the data in the column will be lost.
  - You are about to drop the column `legal_person_id` on the `register_entities` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `register_legal_persons` table. All the data in the column will be lost.
  - You are about to drop the column `entity_id` on the `register_natural_persons` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `register_natural_persons` table. All the data in the column will be lost.
  - You are about to drop the column `admin_type_id` on the `register_organization_charts` table. All the data in the column will be lost.
  - You are about to drop the column `background_type_id` on the `register_organization_charts` table. All the data in the column will be lost.
  - You are about to drop the column `organization_chart_config_id` on the `register_organization_charts` table. All the data in the column will be lost.
  - You are about to drop the column `entity_id` on the `register_resp_entities` table. All the data in the column will be lost.
  - You are about to drop the column `natural_person_id` on the `register_resp_entities` table. All the data in the column will be lost.
  - You are about to drop the column `natural_person_id` on the `register_resp_organization_charts` table. All the data in the column will be lost.
  - You are about to drop the column `organization_chart_id` on the `register_resp_organization_charts` table. All the data in the column will be lost.
  - You are about to drop the column `permission_id` on the `register_roles_permissions` table. All the data in the column will be lost.
  - You are about to drop the column `role_id` on the `register_roles_permissions` table. All the data in the column will be lost.
  - You are about to drop the column `role_id` on the `register_user_roles` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `register_user_roles` table. All the data in the column will be lost.
  - You are about to drop the `counties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `legal_nature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ufs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[register_user_id]` on the table `register_legal_persons` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[register_user_id]` on the table `register_natural_persons` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `first_user` to the `register_admin_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_legal_nature_id` to the `register_admin_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_admin_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_background_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_background_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_change_legal_person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_legal_person_id` to the `register_change_legal_person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_change_legal_person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_change_natural_person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_natural_person_id` to the `register_change_natural_person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_change_natural_person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_change_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_organization_chart_id` to the `register_change_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_change_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_change_resp_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_resp_entity_id` to the `register_change_resp_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_change_resp_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_change_resp_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_resp_organization_chart_id` to the `register_change_resp_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_change_resp_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_entitie_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_entitie_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_entity_type_id` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_legal_nature_id` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_legal_person_id` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_user_id` to the `register_legal_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_entity_id` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_user_id` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_organization_chart_configs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_organization_chart_configs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_admin_type_id` to the `register_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_background_type_id` to the `register_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_organization_chart_config_id` to the `register_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_resp_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_entity_id` to the `register_resp_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_natural_person_id` to the `register_resp_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_resp_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_natural_person_id` to the `register_resp_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_organization_chart_id` to the `register_resp_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_roles_permissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_permission_id` to the `register_roles_permissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_role_id` to the `register_roles_permissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_roles_permissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_user_roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_role_id` to the `register_user_roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_user_id` to the `register_user_roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `register_user_roles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "counties" DROP CONSTRAINT "counties_uf_id_fkey";

-- DropForeignKey
ALTER TABLE "register_admin_types" DROP CONSTRAINT "register_admin_types_legal_nature_id_fkey";

-- DropForeignKey
ALTER TABLE "register_change_legal_person" DROP CONSTRAINT "register_change_legal_person_person_id_fkey";

-- DropForeignKey
ALTER TABLE "register_change_natural_person" DROP CONSTRAINT "register_change_natural_person_person_id_fkey";

-- DropForeignKey
ALTER TABLE "register_change_organization_charts" DROP CONSTRAINT "register_change_organization_charts_organization_chart_id_fkey";

-- DropForeignKey
ALTER TABLE "register_change_resp_entities" DROP CONSTRAINT "register_change_resp_entities_resp_id_fkey";

-- DropForeignKey
ALTER TABLE "register_change_resp_organization_charts" DROP CONSTRAINT "register_change_resp_organization_charts_resp_organization_fkey";

-- DropForeignKey
ALTER TABLE "register_entities" DROP CONSTRAINT "register_entities_county_id_fkey";

-- DropForeignKey
ALTER TABLE "register_entities" DROP CONSTRAINT "register_entities_entity_type_id_fkey";

-- DropForeignKey
ALTER TABLE "register_entities" DROP CONSTRAINT "register_entities_legal_nature_id_fkey";

-- DropForeignKey
ALTER TABLE "register_entities" DROP CONSTRAINT "register_entities_legal_person_id_fkey";

-- DropForeignKey
ALTER TABLE "register_legal_persons" DROP CONSTRAINT "register_legal_persons_photo_fkey";

-- DropForeignKey
ALTER TABLE "register_legal_persons" DROP CONSTRAINT "register_legal_persons_user_id_fkey";

-- DropForeignKey
ALTER TABLE "register_natural_persons" DROP CONSTRAINT "register_natural_persons_photo_fkey";

-- DropForeignKey
ALTER TABLE "register_natural_persons" DROP CONSTRAINT "register_natural_persons_user_id_fkey";

-- DropForeignKey
ALTER TABLE "register_organization_charts" DROP CONSTRAINT "register_organization_charts_admin_type_id_fkey";

-- DropForeignKey
ALTER TABLE "register_organization_charts" DROP CONSTRAINT "register_organization_charts_background_type_id_fkey";

-- DropForeignKey
ALTER TABLE "register_organization_charts" DROP CONSTRAINT "register_organization_charts_organization_chart_config_id_fkey";

-- DropForeignKey
ALTER TABLE "register_resp_entities" DROP CONSTRAINT "register_resp_entities_entity_id_fkey";

-- DropForeignKey
ALTER TABLE "register_resp_entities" DROP CONSTRAINT "register_resp_entities_natural_person_id_fkey";

-- DropForeignKey
ALTER TABLE "register_resp_organization_charts" DROP CONSTRAINT "register_resp_organization_charts_natural_person_id_fkey";

-- DropForeignKey
ALTER TABLE "register_resp_organization_charts" DROP CONSTRAINT "register_resp_organization_charts_organization_chart_id_fkey";

-- DropForeignKey
ALTER TABLE "register_roles_permissions" DROP CONSTRAINT "register_roles_permissions_permission_id_fkey";

-- DropForeignKey
ALTER TABLE "register_roles_permissions" DROP CONSTRAINT "register_roles_permissions_role_id_fkey";

-- DropForeignKey
ALTER TABLE "register_user_roles" DROP CONSTRAINT "register_user_roles_role_id_fkey";

-- DropForeignKey
ALTER TABLE "register_user_roles" DROP CONSTRAINT "register_user_roles_user_id_fkey";

-- DropIndex
DROP INDEX "register_legal_persons_photo_key";

-- DropIndex
DROP INDEX "register_legal_persons_user_id_key";

-- DropIndex
DROP INDEX "register_natural_persons_photo_key";

-- DropIndex
DROP INDEX "register_natural_persons_user_id_key";

-- AlterTable
ALTER TABLE "register_admin_types" DROP COLUMN "legal_nature_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_legal_nature_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_background_types" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_change_legal_person" DROP COLUMN "person_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_legal_person_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_change_natural_person" DROP COLUMN "person_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_natural_person_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_change_organization_charts" DROP COLUMN "organization_chart_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_organization_chart_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_change_resp_entities" DROP COLUMN "resp_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_resp_entity_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_change_resp_organization_charts" DROP COLUMN "resp_organization_chart_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_resp_organization_chart_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_entitie_types" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_entities" DROP COLUMN "entity_type_id",
DROP COLUMN "legal_nature_id",
DROP COLUMN "legal_person_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_entity_type_id" INTEGER NOT NULL,
ADD COLUMN     "register_legal_nature_id" INTEGER NOT NULL,
ADD COLUMN     "register_legal_person_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_legal_persons" DROP COLUMN "user_id",
ADD COLUMN     "register_user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "register_natural_persons" DROP COLUMN "entity_id",
DROP COLUMN "user_id",
ADD COLUMN     "register_entity_id" INTEGER NOT NULL,
ADD COLUMN     "register_user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "register_organization_chart_configs" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_organization_charts" DROP COLUMN "admin_type_id",
DROP COLUMN "background_type_id",
DROP COLUMN "organization_chart_config_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_admin_type_id" INTEGER NOT NULL,
ADD COLUMN     "register_background_type_id" INTEGER NOT NULL,
ADD COLUMN     "register_organization_chart_config_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_resp_entities" DROP COLUMN "entity_id",
DROP COLUMN "natural_person_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_entity_id" INTEGER NOT NULL,
ADD COLUMN     "register_natural_person_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_resp_organization_charts" DROP COLUMN "natural_person_id",
DROP COLUMN "organization_chart_id",
ADD COLUMN     "register_natural_person_id" INTEGER NOT NULL,
ADD COLUMN     "register_organization_chart_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "register_roles" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_roles_permissions" DROP COLUMN "permission_id",
DROP COLUMN "role_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_permission_id" INTEGER NOT NULL,
ADD COLUMN     "register_role_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "register_user_roles" DROP COLUMN "role_id",
DROP COLUMN "user_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_role_id" INTEGER NOT NULL,
ADD COLUMN     "register_user_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "counties";

-- DropTable
DROP TABLE "legal_nature";

-- DropTable
DROP TABLE "photos";

-- DropTable
DROP TABLE "ufs";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "register_users" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "type_person" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_legal_nature" (
    "id" SERIAL NOT NULL,
    "nb_legal_nature" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "first_user" INTEGER NOT NULL,
    "last_user" INTEGER,

    CONSTRAINT "register_legal_nature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_ufs" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "first_user" INTEGER NOT NULL,
    "last_user" INTEGER,

    CONSTRAINT "register_ufs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_counties" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "uf_id" INTEGER NOT NULL,
    "nb_ibge" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "first_user" INTEGER NOT NULL,
    "last_user" INTEGER,

    CONSTRAINT "register_counties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "register_users_document_key" ON "register_users"("document");

-- CreateIndex
CREATE UNIQUE INDEX "register_legal_persons_register_user_id_key" ON "register_legal_persons"("register_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "register_natural_persons_register_user_id_key" ON "register_natural_persons"("register_user_id");

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_register_user_id_fkey" FOREIGN KEY ("register_user_id") REFERENCES "register_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_register_entity_id_fkey" FOREIGN KEY ("register_entity_id") REFERENCES "register_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_natural_person" ADD CONSTRAINT "register_change_natural_person_register_natural_person_id_fkey" FOREIGN KEY ("register_natural_person_id") REFERENCES "register_natural_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_register_user_id_fkey" FOREIGN KEY ("register_user_id") REFERENCES "register_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_legal_person" ADD CONSTRAINT "register_change_legal_person_register_legal_person_id_fkey" FOREIGN KEY ("register_legal_person_id") REFERENCES "register_legal_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_user_roles" ADD CONSTRAINT "register_user_roles_register_user_id_fkey" FOREIGN KEY ("register_user_id") REFERENCES "register_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_user_roles" ADD CONSTRAINT "register_user_roles_register_role_id_fkey" FOREIGN KEY ("register_role_id") REFERENCES "register_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_roles_permissions" ADD CONSTRAINT "register_roles_permissions_register_role_id_fkey" FOREIGN KEY ("register_role_id") REFERENCES "register_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_roles_permissions" ADD CONSTRAINT "register_roles_permissions_register_permission_id_fkey" FOREIGN KEY ("register_permission_id") REFERENCES "register_permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_register_legal_person_id_fkey" FOREIGN KEY ("register_legal_person_id") REFERENCES "register_legal_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_register_legal_nature_id_fkey" FOREIGN KEY ("register_legal_nature_id") REFERENCES "register_legal_nature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_county_id_fkey" FOREIGN KEY ("county_id") REFERENCES "register_counties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_register_entity_type_id_fkey" FOREIGN KEY ("register_entity_type_id") REFERENCES "register_entitie_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_resp_entities" ADD CONSTRAINT "register_resp_entities_register_natural_person_id_fkey" FOREIGN KEY ("register_natural_person_id") REFERENCES "register_natural_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_resp_entities" ADD CONSTRAINT "register_resp_entities_register_entity_id_fkey" FOREIGN KEY ("register_entity_id") REFERENCES "register_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_resp_entities" ADD CONSTRAINT "register_change_resp_entities_register_resp_entity_id_fkey" FOREIGN KEY ("register_resp_entity_id") REFERENCES "register_resp_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_counties" ADD CONSTRAINT "register_counties_uf_id_fkey" FOREIGN KEY ("uf_id") REFERENCES "register_ufs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_admin_types" ADD CONSTRAINT "register_admin_types_register_legal_nature_id_fkey" FOREIGN KEY ("register_legal_nature_id") REFERENCES "register_legal_nature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_organization_charts" ADD CONSTRAINT "register_organization_charts_register_organization_chart_c_fkey" FOREIGN KEY ("register_organization_chart_config_id") REFERENCES "register_organization_chart_configs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_organization_charts" ADD CONSTRAINT "register_organization_charts_register_admin_type_id_fkey" FOREIGN KEY ("register_admin_type_id") REFERENCES "register_admin_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_organization_charts" ADD CONSTRAINT "register_organization_charts_register_background_type_id_fkey" FOREIGN KEY ("register_background_type_id") REFERENCES "register_background_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_organization_charts" ADD CONSTRAINT "register_change_organization_charts_register_organization__fkey" FOREIGN KEY ("register_organization_chart_id") REFERENCES "register_organization_charts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_resp_organization_charts" ADD CONSTRAINT "register_resp_organization_charts_register_organization_ch_fkey" FOREIGN KEY ("register_organization_chart_id") REFERENCES "register_organization_charts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_resp_organization_charts" ADD CONSTRAINT "register_resp_organization_charts_register_natural_person__fkey" FOREIGN KEY ("register_natural_person_id") REFERENCES "register_natural_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_resp_organization_charts" ADD CONSTRAINT "register_change_resp_organization_charts_register_resp_org_fkey" FOREIGN KEY ("register_resp_organization_chart_id") REFERENCES "register_resp_organization_charts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
