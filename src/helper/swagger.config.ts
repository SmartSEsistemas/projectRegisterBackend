// export const swaggerConfig = {
//   openapi: "3.0.0",
//   info: {
//     title: "Projeto Base",
//     version: "1.0.0"
//   },
//   servers: [
//     {
//       url: "http://localhost:3333",
//       description: "API projeto base"
//     }
//   ],
//   paths: {
//     "/person_natural": {
//       post: {
//         summary: "Cadastro de pessoa física",
//         description: "Esta rota será responsável por cadastrar pessoa física",
//         tag: ["Person"],
//         consumer: {

//         }
//         requestBody: {
//           content: {
//             "multipart/form-data": {
//               schema: {
//                 "$ref": "#/components/schemas/Register_natural_Person"
//               }
//             }
//           }
//         },
//         responses: {
//           "200": {
//             description: "Pessoa física registrada."
//           },
//           "400": {
//             description: "Pessoa física já cadastrada."
//           }
//         }
//       },
//       put: {
//         summary: "Atualização de pessoa física",
//         description: "Esta rota será responsável por cadastrar pessoa física",
//         tag: ["Person"],
//         requestBody: {
//           content: {
//             "application/json": {
//               schema: {
//                 "$ref": "#/components/schemas/Natural_Person"
//               }
//             }
//           }
//         },
//         responses: {
//           "200": {
//             description: "Pessoa física registrada."
//           },
//           "400": {
//             description: "Pessoa física já cadastrada."
//           }
//         }
//       },
//     }
//   },

//   components: {
//     schemas: {
//       Register_natural_Person: {
//         type: "object",
//         properties: {
//           photo: {
//             type: "string",
//             format: "binary"
//           },
//           data: {
//             type: "object",
//             properties: {
//               name: { type: "string" },
//               nb_rg: { type: "string" },
//               organ_emission_rg: { type: "string" },
//               uf_rg: { type: "string" },
//               date_emission_rg: { type: "string", format: "date-time" },
//               cnh: { type: "string" },
//               cpf: { type: "string" },
//               date_birth: { type: "string", format: "date-time" },
//               nationality: { type: "string" },
//               address_cep: { type: "string" },
//               address_street: { type: "string" },
//               address_nb: { type: "string" },
//               address_complement: { type: "string" },
//               address_city: { type: "string" },
//               email: { type: "string" },
//               phone: { type: "string" },
//               id_entity: { type: "number" },
//               password: { type: "string" }
//             }
//           }
//         }
//       }
//     }
//   }

// }

