# Login API

Este projeto é uma API simples de login construída com Node.js e Express, com separação entre Controller, Service e Model. A API permite autenticar usuários com base em um conjunto de credenciais armazenadas em memória. O projeto também inclui testes automatizados usando Mocha, Sinon, SuperTest e Chai, e está configurado para rodar em uma pipeline de integração contínua no GitHub Actions.

## Estrutura do Projeto

/login-api
  ├── src
  │   ├── controllers
  │   │   └── authController.js
  │   ├── services
  │   │   └── authService.js
  │   ├── models
  │   │   └── userModel.js
  │   └── app.js
  ├── test
  │   └── authController.test.js
  ├── .github
  │   └── workflows
  │       └── node.js.yml
  ├── package.json
  └── package-lock.json

## Componentes

### Model

- **userModel.js**: Contém um conjunto de usuários em memória e uma função para buscar usuários por nome de usuário.

### Service

- **authService.js**: Implementa a lógica de autenticação, verificando se as credenciais fornecidas correspondem a um usuário existente.

### Controller

- **authController.js**: Gerencia as requisições de login, utilizando o serviço de autenticação para validar as credenciais e retornar a resposta apropriada.

### App

- **app.js**: Configura o servidor Express e define a rota de login.

## Instalação
Clone o repositório:

```bash
git clone https://github.com/seu-usuario/login-api.git
```
## Instale as dependências:

```bash
cd login-api
npm install
```
## Execute o servidor:

```bash
node src/app.js
```

## Testes

Os testes estão localizados na pasta `test` e são escritos usando Mocha, Sinon, SuperTest e Chai. Eles verificam o comportamento do controlador de autenticação, isolando-o do serviço de autenticação.

### Executando os Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test
```

### Uso

A API expõe um endpoint /login que aceita requisições POST com um corpo JSON contendo username e password. Exemplo de requisição:

```bash
POST /login
{
  "username": "user1",
  "password": "pass1"
}
```

## Documentação Swagger

Este projeto utiliza o Swagger para documentação automática da API.

Após instalar as dependências e iniciar o servidor, acesse:

```
http://localhost:3000/api-docs
```

para visualizar e testar os endpoints via Swagger UI.

### Como funciona

- O Swagger está configurado em `src/app.js` usando os pacotes `swagger-ui-express` e `swagger-jsdoc`.
- Os endpoints são documentados diretamente nos controllers, por exemplo em `src/controllers/authController.js`.

### Instalação das dependências do Swagger

Execute o comando abaixo para instalar as dependências necessárias:

```bash
npm install swagger-ui-express swagger-jsdoc --save
```

## Dependências
Certifique-se de que as seguintes dependências estão instaladas:

Express
Body-parser
Mocha
Chai
Chai-http
Sinon
SuperTest