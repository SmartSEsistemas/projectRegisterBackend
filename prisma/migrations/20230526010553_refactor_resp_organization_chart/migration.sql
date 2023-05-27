/*
  Warnings:

  - Added the required column `updated_at` to the `register_resp_organization_charts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "register_change_resp_organization_charts" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_resp_organization_charts" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_user" INTEGER,
ADD COLUMN     "last_user" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
