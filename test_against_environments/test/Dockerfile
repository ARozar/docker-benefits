ARG NODE_VER
FROM "node:${NODE_VER}"

COPY package.json .

COPY .babelrc .

RUN npm install

COPY /src ./src

COPY /test ./test

CMD [ "npm", "run", "test" ]