-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "type_person" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_natural_persons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nb_rg" TEXT NOT NULL,
    "organ_emission_rg" TEXT NOT NULL,
    "uf_rg" TEXT NOT NULL,
    "date_emission_rg" TIMESTAMP(3) NOT NULL,
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
    "user_id" INTEGER NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_natural_persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_change_natural_person" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT NOT NULL,
    "person_id" INTEGER NOT NULL,

    CONSTRAINT "register_change_natural_person_pkey" PRIMARY KEY ("id")
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
    "photo" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_legal_persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_change_legal_person" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "person_id" INTEGER NOT NULL,

    CONSTRAINT "register_change_legal_person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" SERIAL NOT NULL,
    "name_photo" TEXT NOT NULL,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "register_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_user_roles" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "register_user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_permissions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "resource" TEXT NOT NULL,

    CONSTRAINT "register_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_roles_permissions" (
    "id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "register_permissionId" INTEGER NOT NULL,

    CONSTRAINT "register_roles_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_entities" (
    "id" SERIAL NOT NULL,
    "legal_person_id" INTEGER NOT NULL,
    "legal_nature_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "time_zone" TEXT NOT NULL,
    "rpps" BOOLEAN NOT NULL,
    "plan_type" TEXT NOT NULL,
    "county_id" INTEGER NOT NULL,
    "county_cod" TEXT NOT NULL,
    "type_entity_id" INTEGER NOT NULL,
    "advisory" BOOLEAN NOT NULL,
    "person_advisory_id" INTEGER NOT NULL,
    "software_provider_person_id" INTEGER NOT NULL,
    "software_version" TEXT NOT NULL,
    "date_institution" TIMESTAMP(3) NOT NULL,
    "creation_act" TEXT NOT NULL,
    "extinction_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_entities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_type_entities" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "nb_tce" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_type_entities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_resp_entities" (
    "id" SERIAL NOT NULL,
    "natural_person_id" INTEGER NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_expected_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_resp_entities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_change_resp_entities" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT NOT NULL,
    "resp_id" INTEGER NOT NULL,

    CONSTRAINT "register_change_resp_entities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legal_nature" (
    "id" SERIAL NOT NULL,
    "nb_legal_nature" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "legal_nature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ufs" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ufs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "counties" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "uf_id" INTEGER NOT NULL,
    "nb_ibge" TEXT NOT NULL,

    CONSTRAINT "counties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_admin_types" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,
    "legal_nature_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "power" TEXT NOT NULL,

    CONSTRAINT "register_admin_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_orgonograms" (
    "id" SERIAL NOT NULL,
    "orgonogram_config_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "nb_organogram" TEXT NOT NULL,
    "admin_type_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "background_type_id" INTEGER NOT NULL,
    "subunit" BOOLEAN NOT NULL,

    CONSTRAINT "register_orgonograms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_change_orgonograms" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT NOT NULL,
    "organization_char_id" INTEGER NOT NULL,

    CONSTRAINT "register_change_orgonograms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Register_resp_orgonogram" (
    "id" SERIAL NOT NULL,
    "orgonogram_id" INTEGER NOT NULL,
    "natural_person_id" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_expected_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Register_resp_orgonogram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_change_resp_orgonogram" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "resp_orgonogram_id" INTEGER NOT NULL,

    CONSTRAINT "register_change_resp_orgonogram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_orgonogram_configs" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "nb_config_orgonogram" TEXT NOT NULL,
    "name_level_1" TEXT NOT NULL,
    "name_level_2" TEXT NOT NULL,
    "name_level_3" TEXT NOT NULL,
    "name_level_4" TEXT NOT NULL,
    "name_level_5" TEXT NOT NULL,
    "name_level_6" TEXT NOT NULL,
    "size_level_1" INTEGER NOT NULL,
    "size_level_2" INTEGER NOT NULL,
    "size_level_3" INTEGER NOT NULL,
    "size_level_4" INTEGER NOT NULL,
    "size_level_5" INTEGER NOT NULL,
    "size_level_6" INTEGER NOT NULL,
    "separator_level_1" TEXT NOT NULL,
    "separator_level_2" TEXT NOT NULL,
    "separator_level_3" TEXT NOT NULL,
    "separator_level_4" TEXT NOT NULL,
    "separator_level_5" TEXT NOT NULL,
    "separator_level_6" TEXT NOT NULL,
    "required_level_1" BOOLEAN NOT NULL,
    "required_level_2" BOOLEAN NOT NULL,
    "required_level_3" BOOLEAN NOT NULL,
    "required_level_4" BOOLEAN NOT NULL,
    "required_level_5" BOOLEAN NOT NULL,
    "required_level_6" BOOLEAN NOT NULL,
    "year" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_orgonogram_configs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "register_background_types" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "nb_tce" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "final_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "register_background_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_document_key" ON "users"("document");

-- CreateIndex
CREATE UNIQUE INDEX "register_natural_persons_cpf_key" ON "register_natural_persons"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "register_natural_persons_photo_key" ON "register_natural_persons"("photo");

-- CreateIndex
CREATE UNIQUE INDEX "register_natural_persons_user_id_key" ON "register_natural_persons"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "register_change_natural_person_id_key" ON "register_change_natural_person"("id");

-- CreateIndex
CREATE UNIQUE INDEX "register_legal_persons_cnpj_key" ON "register_legal_persons"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "register_legal_persons_photo_key" ON "register_legal_persons"("photo");

-- CreateIndex
CREATE UNIQUE INDEX "register_legal_persons_user_id_key" ON "register_legal_persons"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "register_change_legal_person_id_key" ON "register_change_legal_person"("id");

-- CreateIndex
CREATE UNIQUE INDEX "photos_name_photo_key" ON "photos"("name_photo");

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_photo_fkey" FOREIGN KEY ("photo") REFERENCES "photos"("name_photo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_natural_persons" ADD CONSTRAINT "register_natural_persons_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_natural_person" ADD CONSTRAINT "register_change_natural_person_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "register_natural_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_photo_fkey" FOREIGN KEY ("photo") REFERENCES "photos"("name_photo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_legal_persons" ADD CONSTRAINT "register_legal_persons_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_legal_person" ADD CONSTRAINT "register_change_legal_person_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "register_legal_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_user_roles" ADD CONSTRAINT "register_user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_user_roles" ADD CONSTRAINT "register_user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "register_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_roles_permissions" ADD CONSTRAINT "register_roles_permissions_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "register_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_roles_permissions" ADD CONSTRAINT "register_roles_permissions_register_permissionId_fkey" FOREIGN KEY ("register_permissionId") REFERENCES "register_permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_legal_person_id_fkey" FOREIGN KEY ("legal_person_id") REFERENCES "register_legal_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_legal_nature_id_fkey" FOREIGN KEY ("legal_nature_id") REFERENCES "legal_nature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_county_id_fkey" FOREIGN KEY ("county_id") REFERENCES "counties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_entities" ADD CONSTRAINT "register_entities_type_entity_id_fkey" FOREIGN KEY ("type_entity_id") REFERENCES "register_type_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_resp_entities" ADD CONSTRAINT "register_resp_entities_natural_person_id_fkey" FOREIGN KEY ("natural_person_id") REFERENCES "register_natural_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_resp_entities" ADD CONSTRAINT "register_resp_entities_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "register_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_resp_entities" ADD CONSTRAINT "register_change_resp_entities_resp_id_fkey" FOREIGN KEY ("resp_id") REFERENCES "register_resp_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counties" ADD CONSTRAINT "counties_uf_id_fkey" FOREIGN KEY ("uf_id") REFERENCES "ufs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_admin_types" ADD CONSTRAINT "register_admin_types_legal_nature_id_fkey" FOREIGN KEY ("legal_nature_id") REFERENCES "legal_nature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_orgonograms" ADD CONSTRAINT "register_orgonograms_orgonogram_config_id_fkey" FOREIGN KEY ("orgonogram_config_id") REFERENCES "register_orgonogram_configs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_orgonograms" ADD CONSTRAINT "register_orgonograms_admin_type_id_fkey" FOREIGN KEY ("admin_type_id") REFERENCES "register_admin_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_orgonograms" ADD CONSTRAINT "register_orgonograms_background_type_id_fkey" FOREIGN KEY ("background_type_id") REFERENCES "register_background_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_orgonograms" ADD CONSTRAINT "register_change_orgonograms_organization_char_id_fkey" FOREIGN KEY ("organization_char_id") REFERENCES "register_orgonograms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Register_resp_orgonogram" ADD CONSTRAINT "Register_resp_orgonogram_orgonogram_id_fkey" FOREIGN KEY ("orgonogram_id") REFERENCES "register_orgonograms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Register_resp_orgonogram" ADD CONSTRAINT "Register_resp_orgonogram_natural_person_id_fkey" FOREIGN KEY ("natural_person_id") REFERENCES "register_natural_persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_change_resp_orgonogram" ADD CONSTRAINT "register_change_resp_orgonogram_resp_orgonogram_id_fkey" FOREIGN KEY ("resp_orgonogram_id") REFERENCES "Register_resp_orgonogram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
