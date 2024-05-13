FROM node

USER root

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install 

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
