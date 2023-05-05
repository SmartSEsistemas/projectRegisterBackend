/*
  Warnings:

  - You are about to drop the column `date_issue` on the `register_natural_persons` table. All the data in the column will be lost.
  - You are about to drop the column `issuing_body_rg` on the `register_natural_persons` table. All the data in the column will be lost.
  - Added the required column `date_emission_rg` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organ_emission_rg` to the `register_natural_persons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "register_natural_persons" DROP COLUMN "date_issue",
DROP COLUMN "issuing_body_rg",
ADD COLUMN     "date_emission_rg" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "organ_emission_rg" TEXT NOT NULL;
