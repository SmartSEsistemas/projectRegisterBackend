/*
  Warnings:

  - A unique constraint covering the columns `[photo]` on the table `register_legal_persons` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[photo]` on the table `register_natural_persons` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "register_legal_persons_photo_key" ON "register_legal_persons"("photo");

-- CreateIndex
CREATE UNIQUE INDEX "register_natural_persons_photo_key" ON "register_natural_persons"("photo");

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_photo_fkey" FOREIGN KEY ("photo") REFERENCES "photos"("name_photo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_photo_fkey" FOREIGN KEY ("photo") REFERENCES "photos"("name_photo") ON DELETE RESTRICT ON UPDATE CASCADE;
