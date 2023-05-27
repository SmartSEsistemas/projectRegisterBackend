/*
  Warnings:

  - You are about to drop the column `state` on the `register_natural_persons` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[coat_of_arms]` on the table `register_entities` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `state_uf_id` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "register_natural_persons" DROP COLUMN "state",
ADD COLUMN     "state_uf_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "register_users" ADD COLUMN     "final_date" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "register_entities_coat_of_arms_key" ON "register_entities"("coat_of_arms");

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_coat_of_arms_fkey" FOREIGN KEY ("coat_of_arms") REFERENCES "photos"("name_photo") ON DELETE RESTRICT ON UPDATE CASCADE;
