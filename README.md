# Introduction

This repository contains reproduction for https://github.com/prisma/prisma-client-js/issues/502

## Steps for reproduction

1. Clone this repo
2. Put your mysql instance url in the .env file inside the prisma folder
3. Run `yarn install`
4. Run `prisma2 migrate save --experimental && prisma2 migrate up --experimental`
5. Run `node index.js`

You should see a error message saying `PANIC`
