/*
  Warnings:

  - You are about to drop the column `final_date` on the `register_admin_types` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `register_admin_types` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `register_admin_types` table. All the data in the column will be lost.
  - You are about to drop the column `advisory` on the `register_entities` table. All the data in the column will be lost.
  - You are about to drop the column `county_cod` on the `register_entities` table. All the data in the column will be lost.
  - You are about to drop the column `county_id` on the `register_entities` table. All the data in the column will be lost.
  - You are about to drop the column `creation_act` on the `register_entities` table. All the data in the column will be lost.
  - You are about to drop the column `date_institution` on the `register_entities` table. All the data in the column will be lost.
  - You are about to drop the column `address_city` on the `register_legal_persons` table. All the data in the column will be lost.
  - You are about to drop the column `entity_id` on the `register_legal_persons` table. All the data in the column will be lost.
  - You are about to drop the column `address_city` on the `register_natural_persons` table. All the data in the column will be lost.
  - You are about to drop the column `uf_rg` on the `register_natural_persons` table. All the data in the column will be lost.
  - You are about to drop the column `resource` on the `register_permissions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[photo]` on the table `register_legal_persons` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[photo]` on the table `register_natural_persons` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `admin_types` to the `register_admin_types` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `power` on the `register_admin_types` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `register_entity_id` to the `register_change_legal_person` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `reason` on the `register_change_legal_person` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `register_entity_id` to the `register_change_natural_person` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `reason` on the `register_change_natural_person` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `reason` on the `register_change_organization_charts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `reason` on the `register_change_resp_entities` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `reason` on the `register_change_resp_organization_charts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `accounting_advice` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acronym` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_cep` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_nb` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_street` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coat_of_arms` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod_county_ibge` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entity_creation_act` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entity_institution_date` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nr_tce` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_county_id` to the `register_entities` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `plan_type` on the `register_entities` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `first_user` to the `register_legal_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opening_date` to the `register_legal_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_county_id` to the `register_legal_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_entity_id` to the `register_legal_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `register_legal_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_district` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_county_id` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_date` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_uf_id` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isBackground` to the `register_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_entity_id` to the `register_organization_charts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `module` to the `register_roles` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `register_roles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `active` to the `register_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_user` to the `register_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_entity_id` to the `register_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_permission_id` to the `register_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `register_users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Reason" AS ENUM ('ALTERACAO', 'INATIVACAO');

-- CreateEnum
CREATE TYPE "ReasonRespEntity" AS ENUM ('INATIVACAO');

-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('PREVIDENCIARIO', 'FINANCEIRO');

-- CreateEnum
CREATE TYPE "AdminTypes" AS ENUM ('DIRETA', 'INDIRETA');

-- CreateEnum
CREATE TYPE "Power" AS ENUM ('EXECUTIVO', 'LEGISLATIVO');

-- CreateEnum
CREATE TYPE "Module" AS ENUM ('INSERIR', 'EDITAR', 'REMOVER', 'VISUALIZAR');

-- DropForeignKey
ALTER TABLE "register_entities" DROP CONSTRAINT "register_entities_county_id_fkey";

-- AlterTable
ALTER TABLE "register_admin_types" DROP COLUMN "final_date",
DROP COLUMN "start_date",
DROP COLUMN "type",
ADD COLUMN     "admin_types" "AdminTypes" NOT NULL,
DROP COLUMN "power",
ADD COLUMN     "power" "Power" NOT NULL;

-- AlterTable
ALTER TABLE "register_background_types" ALTER COLUMN "final_date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_change_legal_person" ADD COLUMN     "register_entity_id" INTEGER NOT NULL,
DROP COLUMN "reason",
ADD COLUMN     "reason" "Reason" NOT NULL;

-- AlterTable
ALTER TABLE "register_change_natural_person" ADD COLUMN     "register_entity_id" INTEGER NOT NULL,
ALTER COLUMN "date" DROP DEFAULT,
DROP COLUMN "reason",
ADD COLUMN     "reason" "Reason" NOT NULL;

-- AlterTable
ALTER TABLE "register_change_organization_charts" DROP COLUMN "reason",
ADD COLUMN     "reason" "Reason" NOT NULL;

-- AlterTable
ALTER TABLE "register_change_resp_entities" DROP COLUMN "reason",
ADD COLUMN     "reason" "ReasonRespEntity" NOT NULL;

-- AlterTable
ALTER TABLE "register_change_resp_organization_charts" DROP COLUMN "reason",
ADD COLUMN     "reason" "ReasonRespEntity" NOT NULL;

-- AlterTable
ALTER TABLE "register_entities" DROP COLUMN "advisory",
DROP COLUMN "county_cod",
DROP COLUMN "county_id",
DROP COLUMN "creation_act",
DROP COLUMN "date_institution",
ADD COLUMN     "accounting_advice" BOOLEAN NOT NULL,
ADD COLUMN     "acronym" TEXT NOT NULL,
ADD COLUMN     "address_cep" TEXT NOT NULL,
ADD COLUMN     "address_complement" TEXT,
ADD COLUMN     "address_nb" TEXT NOT NULL,
ADD COLUMN     "address_street" TEXT NOT NULL,
ADD COLUMN     "coat_of_arms" TEXT NOT NULL,
ADD COLUMN     "cod_county_ibge" TEXT NOT NULL,
ADD COLUMN     "entity_creation_act" TEXT NOT NULL,
ADD COLUMN     "entity_institution_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "nr_tce" TEXT NOT NULL,
ADD COLUMN     "register_county_id" INTEGER NOT NULL,
DROP COLUMN "plan_type",
ADD COLUMN     "plan_type" "PlanType" NOT NULL,
ALTER COLUMN "person_advisory_id" DROP NOT NULL,
ALTER COLUMN "extinction_date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_legal_persons" DROP COLUMN "address_city",
DROP COLUMN "entity_id",
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "opening_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "register_county_id" INTEGER NOT NULL,
ADD COLUMN     "register_entity_id" INTEGER NOT NULL,
ADD COLUMN     "state" INTEGER NOT NULL,
ALTER COLUMN "address_complement" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_natural_persons" DROP COLUMN "address_city",
DROP COLUMN "uf_rg",
ADD COLUMN     "address_district" TEXT NOT NULL,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_county_id" INTEGER NOT NULL,
ADD COLUMN     "register_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "register_uf_id" INTEGER NOT NULL,
ADD COLUMN     "state" INTEGER NOT NULL,
ALTER COLUMN "cnh" DROP NOT NULL,
ALTER COLUMN "address_complement" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_organization_chart_configs" ALTER COLUMN "name_level_3" DROP NOT NULL,
ALTER COLUMN "name_level_4" DROP NOT NULL,
ALTER COLUMN "name_level_5" DROP NOT NULL,
ALTER COLUMN "name_level_6" DROP NOT NULL,
ALTER COLUMN "size_level_3" DROP NOT NULL,
ALTER COLUMN "size_level_4" DROP NOT NULL,
ALTER COLUMN "size_level_5" DROP NOT NULL,
ALTER COLUMN "size_level_6" DROP NOT NULL,
ALTER COLUMN "separator_level_1" DROP NOT NULL,
ALTER COLUMN "separator_level_2" DROP NOT NULL,
ALTER COLUMN "separator_level_3" DROP NOT NULL,
ALTER COLUMN "separator_level_4" DROP NOT NULL,
ALTER COLUMN "separator_level_5" DROP NOT NULL,
ALTER COLUMN "separator_level_6" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_organization_charts" ADD COLUMN     "isBackground" BOOLEAN NOT NULL,
ADD COLUMN     "register_entity_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "register_permissions" DROP COLUMN "resource";

-- AlterTable
ALTER TABLE "register_resp_entities" ALTER COLUMN "final_expected_date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_resp_organization_charts" ALTER COLUMN "final_expected_date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_roles" ADD COLUMN     "module" TEXT NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "Module" NOT NULL;

-- AlterTable
ALTER TABLE "register_users" ADD COLUMN     "active" BOOLEAN NOT NULL,
ADD COLUMN     "first_user" INTEGER NOT NULL,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "register_entity_id" INTEGER NOT NULL,
ADD COLUMN     "register_permission_id" INTEGER NOT NULL,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "register_change_user" (
    "id" SERIAL NOT NULL,
    "register_user_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" "ReasonRespEntity" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "first_user" INTEGER NOT NULL,
    "last_user" INTEGER,

    CONSTRAINT "register_change_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" SERIAL NOT NULL,
    "name_photo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "first_user" INTEGER NOT NULL,
    "last_user" INTEGER,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_access_authorizations" (
    "id" SERIAL NOT NULL,
    "register_user_id" INTEGER NOT NULL,
    "approval_date" TIMESTAMP(3) NOT NULL,
    "user_resp_id" INTEGER NOT NULL,
    "register_entity_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "first_user" INTEGER NOT NULL,
    "last_user" INTEGER,

    CONSTRAINT "register_access_authorizations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "photos_name_photo_key" ON "photos"("name_photo");

-- CreateIndex
CREATE UNIQUE INDEX "register_legal_persons_photo_key" ON "register_legal_persons"("photo");

-- CreateIndex
CREATE UNIQUE INDEX "register_natural_persons_photo_key" ON "register_natural_persons"("photo");

-- AddForeignKey
ALTER TABLE "register_users" ADD CONSTRAINT "register_users_register_entity_id_fkey" FOREIGN KEY ("register_entity_id") REFERENCES "register_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_users" ADD CONSTRAINT "register_users_register_permission_id_fkey" FOREIGN KEY ("register_permission_id") REFERENCES "register_permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_user" ADD CONSTRAINT "register_change_user_register_user_id_fkey" FOREIGN KEY ("register_user_id") REFERENCES "register_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_register_uf_id_fkey" FOREIGN KEY ("register_uf_id") REFERENCES "register_ufs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_register_county_id_fkey" FOREIGN KEY ("register_county_id") REFERENCES "register_counties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_photo_fkey" FOREIGN KEY ("photo") REFERENCES "photos"("name_photo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_natural_person" ADD CONSTRAINT "register_change_natural_person_register_entity_id_fkey" FOREIGN KEY ("register_entity_id") REFERENCES "register_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_photo_fkey" FOREIGN KEY ("photo") REFERENCES "photos"("name_photo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_register_county_id_fkey" FOREIGN KEY ("register_county_id") REFERENCES "register_counties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_legal_person" ADD CONSTRAINT "register_change_legal_person_register_entity_id_fkey" FOREIGN KEY ("register_entity_id") REFERENCES "register_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_access_authorizations" ADD CONSTRAINT "register_access_authorizations_register_user_id_fkey" FOREIGN KEY ("register_user_id") REFERENCES "register_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_access_authorizations" ADD CONSTRAINT "register_access_authorizations_register_entity_id_fkey" FOREIGN KEY ("register_entity_id") REFERENCES "register_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_register_county_id_fkey" FOREIGN KEY ("register_county_id") REFERENCES "register_counties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_organization_charts" ADD CONSTRAINT "register_organization_charts_register_entity_id_fkey" FOREIGN KEY ("register_entity_id") REFERENCES "register_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
