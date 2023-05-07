/*
  Warnings:

  - You are about to drop the `Register_resp_orgonogram` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `register_change_orgonograms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `register_change_resp_orgonogram` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `register_orgonogram_configs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `register_orgonograms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Register_resp_orgonogram" DROP CONSTRAINT "Register_resp_orgonogram_natural_person_id_fkey";

-- DropForeignKey
ALTER TABLE "Register_resp_orgonogram" DROP CONSTRAINT "Register_resp_orgonogram_orgonogram_id_fkey";

-- DropForeignKey
ALTER TABLE "register_change_orgonograms" DROP CONSTRAINT "register_change_orgonograms_organization_char_id_fkey";

-- DropForeignKey
ALTER TABLE "register_change_resp_orgonogram" DROP CONSTRAINT "register_change_resp_orgonogram_resp_orgonogram_id_fkey";

-- DropForeignKey
ALTER TABLE "register_orgonograms" DROP CONSTRAINT "register_orgonograms_admin_type_id_fkey";

-- DropForeignKey
ALTER TABLE "register_orgonograms" DROP CONSTRAINT "register_orgonograms_background_type_id_fkey";

-- DropForeignKey
ALTER TABLE "register_orgonograms" DROP CONSTRAINT "register_orgonograms_orgonogram_config_id_fkey";

-- DropTable
DROP TABLE "Register_resp_orgonogram";

-- DropTable
DROP TABLE "register_change_orgonograms";

-- DropTable
DROP TABLE "register_change_resp_orgonogram";

-- DropTable
DROP TABLE "register_orgonogram_configs";

-- DropTable
DROP TABLE "register_orgonograms";

-- CreateTable
CREATE TABLE "register_organization_charts" (
    "id" SERIAL NOT NULL,
    "organization_chart_config_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "nb_organogram" TEXT NOT NULL,
    "admin_type_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "background_type_id" INTEGER NOT NULL,
    "subunit" BOOLEAN NOT NULL,

    CONSTRAINT "register_organization_charts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_change_organization_charts" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT NOT NULL,
    "organization_chart_id" INTEGER NOT NULL,

    CONSTRAINT "register_change_organization_charts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_resp_organization_charts" (
    "id" SERIAL NOT NULL,
    "organization_chart_id" INTEGER NOT NULL,
    "natural_person_id" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_expected_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_resp_organization_charts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_change_resp_organization_charts" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "resp_organization_chart_id" INTEGER NOT NULL,

    CONSTRAINT "register_change_resp_organization_charts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_organization_chart_configs" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "nb_config_organization_chart" TEXT NOT NULL,
    "name_level_1" TEXT NOT NULL,
    "name_level_2" TEXT NOT NULL,
    "name_level_3" TEXT NOT NULL,
    "name_level_4" TEXT NOT NULL,
    "name_level_5" TEXT NOT NULL,
    "name_level_6" TEXT NOT NULL,
    "size_level_1" INTEGER NOT NULL,
    "size_level_2" INTEGER NOT NULL,
    "size_level_3" INTEGER NOT NULL,
    "size_level_4" INTEGER NOT NULL,
    "size_level_5" INTEGER NOT NULL,
    "size_level_6" INTEGER NOT NULL,
    "separator_level_1" TEXT NOT NULL,
    "separator_level_2" TEXT NOT NULL,
    "separator_level_3" TEXT NOT NULL,
    "separator_level_4" TEXT NOT NULL,
    "separator_level_5" TEXT NOT NULL,
    "separator_level_6" TEXT NOT NULL,
    "required_level_1" BOOLEAN NOT NULL,
    "required_level_2" BOOLEAN NOT NULL,
    "required_level_3" BOOLEAN NOT NULL,
    "required_level_4" BOOLEAN NOT NULL,
    "required_level_5" BOOLEAN NOT NULL,
    "required_level_6" BOOLEAN NOT NULL,
    "year" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_organization_chart_configs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "register_organization_charts" ADD CONSTRAINT "register_organization_charts_organization_chart_config_id_fkey" FOREIGN KEY ("organization_chart_config_id") REFERENCES "register_organization_chart_configs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_organization_charts" ADD CONSTRAINT "register_organization_charts_admin_type_id_fkey" FOREIGN KEY ("admin_type_id") REFERENCES "register_admin_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_organization_charts" ADD CONSTRAINT "register_organization_charts_background_type_id_fkey" FOREIGN KEY ("background_type_id") REFERENCES "register_background_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_organization_charts" ADD CONSTRAINT "register_change_organization_charts_organization_chart_id_fkey" FOREIGN KEY ("organization_chart_id") REFERENCES "register_organization_charts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_resp_organization_charts" ADD CONSTRAINT "register_resp_organization_charts_organization_chart_id_fkey" FOREIGN KEY ("organization_chart_id") REFERENCES "register_organization_charts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_resp_organization_charts" ADD CONSTRAINT "register_resp_organization_charts_natural_person_id_fkey" FOREIGN KEY ("natural_person_id") REFERENCES "register_natural_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_resp_organization_charts" ADD CONSTRAINT "register_change_resp_organization_charts_resp_organization_fkey" FOREIGN KEY ("resp_organization_chart_id") REFERENCES "register_resp_organization_charts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
