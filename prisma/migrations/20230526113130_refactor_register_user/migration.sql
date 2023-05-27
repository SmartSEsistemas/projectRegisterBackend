/*
  Warnings:

  - A unique constraint covering the columns `[document,register_entity_id]` on the table `register_users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "register_users_document_register_entity_id_key" ON "register_users"("document", "register_entity_id");
