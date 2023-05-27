import instancePrisma from './prisma/client.js';

async function seed() {
  instancePrisma.setDB("db1");
  await instancePrisma.prisma().register_uf.create({
    data: {
      description:'Brasília',
      first_user: 1,
    }
  })

  await instancePrisma.prisma().register_county.create({
    data: {
      description: 'Taguatinga',
      first_user: 1,
      nb_ibge: 'd5d65f1s3',
      uf_id: 1
    }
  }).catch(() => console.log("Error ao criar seed MUNICIPIO"))

  await instancePrisma.prisma().register_user.create({
    data: {
      active: true,
      document: "123456789",
      password: "$2b$10$8U9IVgwXbnIWVsXiHpbdC.3ZIjpsFsZHObMtU.QH63OtnZEdy6bqa",
      register_entity_id:1,
      first_user: 1,
      register_permission_id: 1,
      start_date: "2023-05-02T20:21:48.211Z",
      type_person: "LEGAL"
    }
  }).catch(() => console.log("Error ao criar seed USER"))

  await instancePrisma.prisma().register_legal_person.create({
    data: {
      name: "Empresa 01",
      cnpj: "34014544000124",
      corporate_name: "empresa01",
      nationality: "Brasileira",
      address_cep: "72000000",
      address_street: "Rua: O",
      address_nb:"02",
      address_complement: "Perto do mercado",
      register_county_id: 1,
      state_uf_id: 1,
      email: "empresa@email.com",
      phone:"123456798",
      register_date: "2023-05-02T20:21:48.211Z",
      first_user: 1,
      opening_date: "2023-05-02T20:21:48.211Z",
      register_entity_id: 1,
      register_user_id: 1,
    }
  }).catch(() => console.log("Error ao criar seed LEGAL PERSON"))

  await instancePrisma.prisma().register_legal_nature.create({
    data: {
      description:"Natureza",
      nb_legal_nature: "6a1d",
      start_date: "2023-05-02T20:21:48.211Z",
      final_date: "2023-05-02T20:21:48.211Z",
      first_user:1
    }
  }).catch(() => console.log("Error ao criar seed LEGAL NATURE"))

  await instancePrisma.prisma().register_entity_type.create({
    data: {
      description: "Tipo de entidade",
      start_date: "2023-05-02T20:21:48.211Z",
      final_date: "2023-05-02T20:21:48.211Z",
      first_user: 1,
      nb_tce: "ds51"
    }
  }).catch(() => console.log("Error ao criar seed ENTITY TYPE"))

  await instancePrisma.prisma().register_photo.create({
    data: {
      name_photo: "entidade_01",
      first_user: 1
    }
  }).catch(() => console.log("Error ao criar seed PHOTO"));

  await instancePrisma.prisma().register_entity.create({
    data: {
      email:"email@email.com",
      accounting_advice: false,
      acronym: "QWE",
      address_cep:"13245689",
      address_nb: "1SD513A",
      address_street: "RUA 10",
      cod_county_ibge: "DF",
      entity_creation_act: "QWE",
      entity_institution_date: "2023-05-02T20:21:48.211Z",
      first_user: 1,
      nr_tce: "SDF",
      phone: "123456789",
      plan_type: "FINANCEIRO",
      rpps: false,
      site: "www.site.com.br",
      software_provider_person_id: 1,
      software_version: "v1",
      time_zone: "Sp/BR",
      register_county_id: 1,
      register_entity_type_id: 1,
      register_legal_nature_id: 1,
      coat_of_arms: "entidade_01",
      register_legal_person_id: 1
    }
  }).catch((e) => console.log("Error ao criar seed ENTIDADE"))

    await instancePrisma.prisma().register_user.create({
    data: {
      active: true,
      document: "02956328107",
      password: "$2b$10$8U9IVgwXbnIWVsXiHpbdC.3ZIjpsFsZHObMtU.QH63OtnZEdy6bqa",
      register_entity_id:1,
      first_user: 1,
      register_permission_id: 1,
      start_date: "2023-05-02T20:21:48.211Z",
      type_person: "NATURAL"
    }
  }).catch(() => console.log("Error ao criar seed USER NATURAL"))

  await instancePrisma.prisma().register_natural_person.create({
    data: {
      name: "Pessoa",
      nb_rg: "123456",
      organ_emission_rg: "SSP",
      register_uf_id: 1,
      date_emission_rg: "2023-05-02T20:21:48.211Z",
      cnh: "1658168",
      cpf: "34577682001",
      date_birth: "2023-05-02T20:21:48.211Z",
      nationality: "Brasileira",
      address_cep: "72000000",
      address_street: "Rua: 1",
      address_nb :"02",
      address_district: "taguatinga-sul",
      address_complement: "Perto do mercado",
      register_county_id: 1,
      state_uf_id: 1,
      email: "pessoa@email.com",
      phone:"123456798",
      register_date: "2023-05-02T20:21:48.211Z",
      first_user: 1,
      register_entity_id: 1,
      register_user_id: 2
    }
  }).catch(() => console.log("Error ao criar seed NATURAL PERSON"))
}

// seed();