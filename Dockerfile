from node:12
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# RUN chown -R node:node /app
# USER node

EXPOSE 3000

CMD npm migrate
CMD npm start