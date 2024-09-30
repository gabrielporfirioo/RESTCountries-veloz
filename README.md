# Where in the world ?

Esse projeto foi solicitado como parte do Processo seletivo da Veloz. Ele consiste em exbir alguns países na tela e suas informações principais utilizando a API RESTCountries.

## Funcionalidades

- Clicar nos países é possível obter mais informações
- Filtro de pesquisa
- filtro de Região
- filtro subregião

## Tecnologias Utilizadas

- Node.js
- Express.js
- Nodemon


## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão recomendada: 14.x ou superior)
- npm (normalmente vem com Node.js)

## Configuração

1. Clone o repositório:
   ```
   git clone https://github.com/gabrielporfirioo/RESTCountries-veloz.git
   ```

2. Entre no diretório do projeto:
   ```
   cd veloz
   ```

3. Instale as dependências:
   ```
   npm install
   ```



## Executando a Aplicação



Para iniciar o servidor:

```
npm start
```

A aplicação estará disponível em `http://localhost:3000` 

## Estrutura do Projeto

```
veloz/
├── js/
│   └── api.js
|
├── node_modules
|
├── public/
│   ├── css/
│   │   └── countryStyle.css
|   |      └── styles.css
│   ├── template/
│   │   └── contry.html
|
├── app.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## Uso da API REST Countries

Este projeto utiliza a API REST Countries para mostrar os países na tela, assim como suas informações prévias, pudendo utilizar de filtros de pesquisa e  informações adicionais ao clicar no país.

Foi utilizado endpoints da API para essa aplicação como a principal que esxibe todos os países: https://restcountries.com/v3.1/all

## Scripts NPM


- `npm start`: Inicia o servidor






