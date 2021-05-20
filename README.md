<div align="center">
  <h1>Take Challenge</h1>
  <img src="https://avatars.githubusercontent.com/u/5568767?v=4" width="50" height="50" alt="Bot">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" width="50" height="50" alt="NodeJS">
</div>
## Português
### Introdução
Esse projeto é um desafio técnico da empresa [Take Blip](https://www.take.net) para uma vaga de desenvolvedor, o proposto foi criar um ChatBot utilizando a plataforma da empresa, com um fluxo preestabelecido, sendo que, em dado ponto, o bot deveria listar, com um carrosel, informações sobre os 5 repositórios de linguagem C# mais antigos da Take, ordenados de forma crescente por data de criação.
Para isso, deveria ser desenvolvida um API que consumisse a API do github e retornasse os dados necessários.
### Sobre o Bot
Dentro do projeto, na pasta Flow, há um arquivo "mybotflow.json", é nele que o bot está contido, para acessar suas configurações e testá-lo é preciso acessar a [plataforma](https://account.blip.ai/login) da take e [importar](https://help.blip.ai/hc/pt-br/articles/360059353133-Como-importar-o-fluxo-de-um-bot-no-Builder) o bot. 
```
challenge-take
├── Api
├── Flow
│ └── mybotflow.json
```
### Sobre a API
A API foi desenvolvida em JavaScript, usando NodeJS + Express + Axios, é rodada com NPM/Yarn e hosteada no Heroku.
Ela é adaptável quanto ao retorno e para isso devem ser passados na query: a linguagem dos repositório a serem buscados e quantos devem ser.

#### Endpoint
| METHOD | URL                                                                               |                DESCRIÇÃO                |
| ------ | --------------------------------------------------------------------------------- | --------------------------------------- |
| GET    | https://challenge-take.herokuapp.com/repositories?language=JavaScript&quantity=4  | É preciso passar os parâmetros da query |

#### Como instalar e rodar localmente
1. Dê um `git clone` no repositório;
2. Rode no terminal, dentro da pasta Api `yarn install`;
3. Crie um arquivo .env para definir a porta da aplicação, como no exemplo .env.example, o arquivo .env serve para portar variáveis de ambiente que não devem ser disponibilizadas publicamente, como keys.

### Feedback
Eu sou apenas uma constante aprendiz, se você quiser sugerir algo, me conte por favor! :) 

## Inglês
### Introduction
This project is a technical challenge of the company [Take Blip](https://www.take.net) for a developer vacancy, the proposal was to create a ChatBot using the company plataform, with a pre-estabilished flow, and in a certain point the bot must to list, with a carousel, information about the company's five oldest C# repositories, in ascending order of creation date.
To this, should be developer a API that consumes the github's API and return the needed data. 

### About the Bot
Inside the project does exist a file, inside the folder "flow", named "mybotflow.json", the bot is in there, and to acess the settings and test it, you must to acess Takes's [plataform](https://account.blip.ai/login) and [import](https://help.blip.ai/hc/pt-br/articles/360059353133-Como-importar-o-fluxo-de-um-bot-no-Builder) the bot.
```
challenge-take
├── Api
├── Flow
│ └── mybotflow.json
```
### About the API
The API were developed with JavaScript, using NodeJS + Express + Axios, use NPM/Yarn to run and it is host in Heroku.
It has a adaptative return and for it, must to be pass in query: the language of repositories and how many must to be fetch.

#### Endpoint
| METHOD | URL                                                                               |               DESCRIPTION               |
| ------ | --------------------------------------------------------------------------------- | --------------------------------------- |
| GET    | https://challenge-take.herokuapp.com/repositories?language=JavaScript&quantity=4  |         query params are needed         |

#### How to install and run
1. Run a `git clone` of my repository;
2. Run `yarn install` inside Api folder;
3. Create a .env file to define the application's port, follow the example in .env.example, the .env file is for environment variables that cannot be made publicly available, like keys.

### Feedback
I'm just a continnuous learnner, if you want to suggest something, please let me know! :)
The commits and comments are all in portuguese, unlike my other projects, because this is a test of a brazilian company.