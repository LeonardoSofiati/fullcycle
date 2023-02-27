FROM node:16.16.0-slim

WORKDIR /home/node/app

RUN apt-get update && apt-get install -y wget

#Isso é para o dockerize ficar esperando o "db" subir antes do app em Node subir para não dar conflito
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

# CMD ["node", "index.js"]
