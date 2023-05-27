/*
  Warnings:

  - You are about to drop the column `admin_types` on the `register_admin_types` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[description,admin_type]` on the table `register_admin_types` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description,nb_tce]` on the table `register_background_types` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description,nb_tce]` on the table `register_entitie_types` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[register_entity_type_id,register_legal_person_id,nr_tce]` on the table `register_entities` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cnpj,register_entity_id]` on the table `register_legal_persons` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf,register_entity_id]` on the table `register_natural_persons` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `register_permissions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[register_entity_id,start_date,final_expected_date]` on the table `register_resp_entities` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[register_organization_chart_id,start_date,final_expected_date]` on the table `register_resp_organization_charts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,type]` on the table `register_roles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `admin_type` to the `register_admin_types` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `reason` on the `register_change_resp_entities` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `reason` on the `register_change_resp_organization_charts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `reason` on the `register_change_user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `register_roles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ReasonInativacao" AS ENUM ('INATIVACAO');

-- CreateEnum
CREATE TYPE "Types" AS ENUM ('INSERIR', 'EDITAR', 'REMOVER', 'VISUALIZAR');

-- DropIndex
DROP INDEX "register_legal_persons_cnpj_key";

-- DropIndex
DROP INDEX "register_natural_persons_cpf_key";

-- AlterTable
ALTER TABLE "register_admin_types" DROP COLUMN "admin_types",
ADD COLUMN     "admin_type" "AdminTypes" NOT NULL;

-- AlterTable
ALTER TABLE "register_change_resp_entities" DROP COLUMN "reason",
ADD COLUMN     "reason" "ReasonInativacao" NOT NULL;

-- AlterTable
ALTER TABLE "register_change_resp_organization_charts" DROP COLUMN "reason",
ADD COLUMN     "reason" "ReasonInativacao" NOT NULL;

-- AlterTable
ALTER TABLE "register_change_user" DROP COLUMN "reason",
ADD COLUMN     "reason" "ReasonInativacao" NOT NULL;

-- AlterTable
ALTER TABLE "register_roles" DROP COLUMN "type",
ADD COLUMN     "type" "Types" NOT NULL;

-- DropEnum
DROP TYPE "Module";

-- DropEnum
DROP TYPE "ReasonRespEntity";

-- CreateIndex
CREATE UNIQUE INDEX "register_admin_types_description_admin_type_key" ON "register_admin_types"("description", "admin_type");

-- CreateIndex
CREATE UNIQUE INDEX "register_background_types_description_nb_tce_key" ON "register_background_types"("description", "nb_tce");

-- CreateIndex
CREATE UNIQUE INDEX "register_entitie_types_description_nb_tce_key" ON "register_entitie_types"("description", "nb_tce");

-- CreateIndex
CREATE UNIQUE INDEX "register_entities_register_entity_type_id_register_legal_pe_key" ON "register_entities"("register_entity_type_id", "register_legal_person_id", "nr_tce");

-- CreateIndex
CREATE UNIQUE INDEX "register_legal_persons_cnpj_register_entity_id_key" ON "register_legal_persons"("cnpj", "register_entity_id");

-- CreateIndex
CREATE UNIQUE INDEX "register_natural_persons_cpf_register_entity_id_key" ON "register_natural_persons"("cpf", "register_entity_id");

-- CreateIndex
CREATE UNIQUE INDEX "register_permissions_name_key" ON "register_permissions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "register_resp_entities_register_entity_id_start_date_final__key" ON "register_resp_entities"("register_entity_id", "start_date", "final_expected_date");

-- CreateIndex
CREATE UNIQUE INDEX "register_resp_organization_charts_register_organization_cha_key" ON "register_resp_organization_charts"("register_organization_chart_id", "start_date", "final_expected_date");

-- CreateIndex
CREATE UNIQUE INDEX "register_roles_name_type_key" ON "register_roles"("name", "type");
