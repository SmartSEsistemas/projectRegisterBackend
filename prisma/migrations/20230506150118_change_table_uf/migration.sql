/*
  Warnings:

  - Added the required column `uf` to the `ufs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf_cod` to the `ufs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ufs" ADD COLUMN     "uf" TEXT NOT NULL,
ADD COLUMN     "uf_cod" INTEGER NOT NULL;
