# Use a lightweight Node image
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Install all dependencies (including dev ones)
RUN npm install

COPY . .

EXPOSE 8080

# run with nodemon
CMD ["npm", "start"]
