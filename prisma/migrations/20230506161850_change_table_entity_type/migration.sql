/*
  Warnings:

  - You are about to drop the column `type_entity_id` on the `register_entities` table. All the data in the column will be lost.
  - You are about to drop the `register_type_entities` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `entity_type_id` to the `register_entities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "register_entities" DROP CONSTRAINT "register_entities_type_entity_id_fkey";

-- AlterTable
ALTER TABLE "register_entities" DROP COLUMN "type_entity_id",
ADD COLUMN     "entity_type_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "register_type_entities";

-- CreateTable
CREATE TABLE "register_entitie_types" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "nb_tce" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_entitie_types_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_entity_type_id_fkey" FOREIGN KEY ("entity_type_id") REFERENCES "register_entitie_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
