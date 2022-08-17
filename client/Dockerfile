FROM node:16.16.0-alpine3.16

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY --chown=app:node package*.json ./
RUN npm install
COPY . .

EXPOSE 3000 

CMD ["npm", "start"]