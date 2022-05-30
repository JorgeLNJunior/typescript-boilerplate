<div align="center" id="short-description-and-logo">

<img src="https://277969009-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-Lf4a7JZE8Gwa4Y0EaRf%2Favatar.png?generation=1559220593217278&alt=media" width="150px">

<h1>Typescript Boilerplate</h1>

Simples boilerplate para projetos com typescript

</div>

<div align="center" id="badges">

[![Actions Build And Test](https://img.shields.io/github/workflow/status/JorgeLNJunior/typescript-boilerplate/CI/main)](https://github.com/JorgeLNJunior/typescript-boilerplate/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/JorgeLNJunior/typescript-boilerplate/badge.svg?branch=main)](https://coveralls.io/github/JorgeLNJunior/typescript-boilerplate?branch=main)
[![License](https://img.shields.io/github/license/JorgeLNJunior/typescript-boilerplate)](https://github.com/JorgeLNJunior/typescript-boilerplate/blob/main/LICENSE.md)
[![Release](https://img.shields.io/github/v/release/JorgeLNJunior/typescript-boilerplate?color=lgreen)](https://github.com/JorgeLNJunior/typescript-boilerplate/releases)

</div>

<div align="center">

[Link 1](https://stackoverflow.com/) |
[Link 2](https://github.com/)

</div>

## Tabela de Conteúdos

- [Features](https://github.com/JorgeLNJunior/typescript-boilerplate#features)
- [Configuração](https://github.com/JorgeLNJunior/typescript-boilerplate#configura%C3%A7%C3%A3o)
- [Licença](https://github.com/JorgeLNJunior/typescript-boilerplate#licen%C3%A7a)

## Features
- Conventional commits com [Lint Staged »](https://github.com/okonet/lint-staged#readme), [Husky »](https://github.com/typicode/husky#readme) e [Commit Lint »](https://github.com/conventional-changelog/commitlint#readme)
- Lint com [ESLint »](https://eslint.org)
- Testes com [Jest »](https://jestjs.io)
- Processo de test, build, release e deploy com [GitHub Actions »](https://github.com/features/actions)

## Configuração

### Projeto
- Clone o projeto para sua máquina `git clone https://github.com/JorgeLNJunior/typescript-boilerplate.git` ou clique no botão `Use this template` no GitHub.
- Instale as dependências `npm install`.
- Renomeie o arquivo `.env.example` para `.env`.
- Exclua a pasta `.git` `rm -drf .git`.
- Exclua o arquivo `CHANGELOG.md`
- Altere os arquivos `package.json` e `package-lock.json`

### Actions

#### Coverage
- Vá até o [Coverals](https://coveralls.io/repos/new) e adicione seu repositório.

#### Deploy
- Crie um novo projeto no [Heroku](https://www.heroku.com/).
- Clique na sua foto no canto superior direito e vá em `Account Settings > API Key` e copie a chave.
- No seu repositório do GitHub vá até `Settings > Secrets > Actions` e crie as seguintes variáveis.
    - `HEROKU_API_KEY` com sua API Key do Heroku.
    - `HEROKU_APP_NAME` com nome da sua aplicação no Heroku.
    - `HEROKU_APP_EMAIL` com email da sua conta no Heroku.

## Licença

Projeto sob a licença [MIT »](https://github.com/JorgeLNJunior/animes-review-api/blob/master/LICENSE.md).

