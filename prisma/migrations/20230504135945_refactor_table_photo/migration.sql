/*
  Warnings:

  - You are about to drop the column `img` on the `photos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name_photo]` on the table `photos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name_photo` to the `photos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "photos" DROP COLUMN "img",
ADD COLUMN     "name_photo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "photos_name_photo_key" ON "photos"("name_photo");
