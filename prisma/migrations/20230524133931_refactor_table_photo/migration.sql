/*
  Warnings:

  - You are about to drop the `photos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "register_entities" DROP CONSTRAINT "register_entities_coat_of_arms_fkey";

-- DropForeignKey
ALTER TABLE "register_legal_persons" DROP CONSTRAINT "register_legal_persons_photo_fkey";

-- DropForeignKey
ALTER TABLE "register_natural_persons" DROP CONSTRAINT "register_natural_persons_photo_fkey";

-- AlterTable
ALTER TABLE "register_legal_persons" ALTER COLUMN "state_uf_id" SET DEFAULT 0;

-- DropTable
DROP TABLE "photos";

-- CreateTable
CREATE TABLE "register_photos" (
    "id" SERIAL NOT NULL,
    "name_photo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "first_user" INTEGER NOT NULL,
    "last_user" INTEGER,

    CONSTRAINT "register_photos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "register_photos_name_photo_key" ON "register_photos"("name_photo");

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_photo_fkey" FOREIGN KEY ("photo") REFERENCES "register_photos"("name_photo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_photo_fkey" FOREIGN KEY ("photo") REFERENCES "register_photos"("name_photo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_coat_of_arms_fkey" FOREIGN KEY ("coat_of_arms") REFERENCES "register_photos"("name_photo") ON DELETE RESTRICT ON UPDATE CASCADE;
