FROM node:latest

WORKDIR /app/

COPY . .

ENTRYPOINT [ "npx" ]