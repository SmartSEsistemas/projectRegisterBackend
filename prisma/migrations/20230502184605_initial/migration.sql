/*
  Warnings:

  - You are about to drop the `legal_persons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `natural_persons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "legal_person_fk";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "natural_person_fk";

-- DropTable
DROP TABLE "legal_persons";

-- DropTable
DROP TABLE "natural_persons";

-- CreateTable
CREATE TABLE "register_natural_persons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nb_rg" TEXT NOT NULL,
    "issuing_body_rg" TEXT NOT NULL,
    "uf_rg" TEXT NOT NULL,
    "date_issue" TIMESTAMP(3) NOT NULL,
    "cnh" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "date_birth" TIMESTAMP(3) NOT NULL,
    "nationality" TEXT NOT NULL,
    "address_cep" TEXT NOT NULL,
    "address_street" TEXT NOT NULL,
    "address_nb" TEXT NOT NULL,
    "address_complement" TEXT NOT NULL,
    "address_city" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id_entity" INTEGER NOT NULL,

    CONSTRAINT "register_natural_persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_legal_persons" (
    "id" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "corporate_name" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "register_date" TIMESTAMP(3) NOT NULL,
    "address_cep" TEXT NOT NULL,
    "address_street" TEXT NOT NULL,
    "address_nb" TEXT NOT NULL,
    "address_complement" TEXT NOT NULL,
    "address_city" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id_entity" INTEGER NOT NULL,

    CONSTRAINT "register_legal_persons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "register_natural_persons_cpf_key" ON "register_natural_persons"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "register_legal_persons_cnpj_key" ON "register_legal_persons"("cnpj");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "natural_person_fk" FOREIGN KEY ("document") REFERENCES "register_natural_persons"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "legal_person_fk" FOREIGN KEY ("document") REFERENCES "register_legal_persons"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
