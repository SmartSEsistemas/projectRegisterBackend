# projectRegister
Registration module where the people and users who used the system will be registered

## Execução do projeto

### Na raiz do arquivo:
 * Instale as dependências do projeto: `npm install`;
 * Configure as variáveis de ambiente no arquivo .env(descritas logo abaixo);
 * Execute o comando `npm run start:dev` para iniciar a aplicação.


### Variáveis de ambiente (.env):
 
  Por motivos de segurança, o token do email será passado posteriormente.
  
  * DATABASE_01_URL="postgresql://root:root@localhost:5432/db1?schema=public"
  * DATABASE_02_URL="postgresql://root:root@localhost:5433/db2?schema=public"
  * EMAIL_TOKEN=


### Docker e Prisma.io:

Para criar uma instancia do banco de dados e inserir as tabelas, segue os seguintes comandos:

 * Certifique-se de que o Docker e o Docker Compose estão instalados no seu sistema e aberto;
 * Na raiz do projeto, execute o comando `docker-compose up -d`;
 * Em seguida, execute o seguinte código para criar as tabelas no banco de dados: `npx prisma migrate dev --name create-all-tables`; 
 * Para interromper a execução do container, execute o comando docker-compose down.

Obs: Caso queira fazer o teste para mudar o banco de dados de acordo com o nome da entidade passada, faça os seguintes passos:

  * Antes de iniciar, realize a instrução anterior(caso não tenha feito);
  * Logo após, acesse o arquivo `schema.prisma` que se encontra na pasta `prisma`;
  * No campo `datasource db`, modifique a url para o `DATABASE_02_URL`, pois por padrão já se encontra o `DATABASE_01_URL`;
  * Faça novamente a migrate com o comando: `npx prisma migrate dev --name create-all-tables`;


### Swagger:

Para acessar a documentação da api, acesse: `http://localhost:3333/api-docs`
