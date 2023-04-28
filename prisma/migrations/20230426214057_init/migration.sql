-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "document" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "natural_persons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "natural_persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legal_persons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "legal_persons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_document_key" ON "users"("document");

-- CreateIndex
CREATE UNIQUE INDEX "natural_persons_cpf_key" ON "natural_persons"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "legal_persons_cnpj_key" ON "legal_persons"("cnpj");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "natural_person_fk" FOREIGN KEY ("document") REFERENCES "natural_persons"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "legal_person_fk" FOREIGN KEY ("document") REFERENCES "legal_persons"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
