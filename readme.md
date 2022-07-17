
# TPRTD Movies

O TPRTD recomenda filmes disponíveis nos streamings que você já assina, rankeados por um fator entre popularidade e crítica.


## Demonstração
[TPRTD Movies](https://tprtd.vercel.app)

[Repositório Front-end](https://github.com/milfontariel/tprtd)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

### Atenção: 
DATABASE_URL deve ser preenchido de acordo com suas credenciais do PostgreSQL e API_KEY com sua API KEY gerada no site do [TMDB](https://www.themoviedb.org/documentation/api)

<br>

`DATABASE_URL=postgresql://postgres:123456@localhost:5432/tprtd`

`API_KEY=YOUR_API_KEY`

`IMG_BASE_URL=http://image.tmdb.org/t/p/`

`BASE_URL=https://api.themoviedb.org/3/`

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/milfontariel/tprtd-api.git
```

Entre no diretório do projeto

```bash
  cd tprtd
```

Instale as dependências

```bash
  npm install
```

Rode as migrations do Prisma
```bash
  npx prisma migrate dev
```

Inicie o servidor

```bash
  npm run dev
```


## Stack utilizada

**Front-end:** React, TailwindCSS

**Back-end:** Node, Express, Typescript


## Autores

- [@arielmilfont](https://www.github.com/milfontariel)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

[TMDB](https://www.themoviedb.org/documentation/api)