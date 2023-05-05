/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `register_legal_persons` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `register_natural_persons` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "register_legal_persons_userId_key" ON "register_legal_persons"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "register_natural_persons_userId_key" ON "register_natural_persons"("userId");
