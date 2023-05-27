/*
  Warnings:

  - A unique constraint covering the columns `[register_entity_id,start_date]` on the table `register_resp_entities` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[register_organization_chart_id,start_date]` on the table `register_resp_organization_charts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "register_resp_entities_register_entity_id_start_date_final__key";

-- DropIndex
DROP INDEX "register_resp_organization_charts_register_organization_cha_key";

-- CreateIndex
CREATE UNIQUE INDEX "register_resp_entities_register_entity_id_start_date_key" ON "register_resp_entities"("register_entity_id", "start_date");

-- CreateIndex
CREATE UNIQUE INDEX "register_resp_organization_charts_register_organization_cha_key" ON "register_resp_organization_charts"("register_organization_chart_id", "start_date");
