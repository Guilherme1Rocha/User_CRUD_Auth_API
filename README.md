# User API – Node.js + TypeScript + Express + MongoDB

A secure **CRUD + Authentication** REST API built with **Node.js**, **TypeScript**, **Express**, and **MongoDB**.  
The API provides user registration, login, and user management endpoints.  
Authentication is handled **manually** with password hashing and **cookie-based JWT sessions**.

---

## 🧩 Features

- **Manual authentication** using password + salt hashing (no external auth libraries)
- **Cookie-based JWT authentication** for protected routes
- **MongoDB** with Mongoose ODM
- **Express.js** REST API
- **Docker** support for easy setup and deployment

---

## 📁 Project Structure

```text
src/
├── controllers/    # Request handlers (Auth, Users)
├── db/             # Mongoose schemas (User)
├── router/         # API route definitions
├── middlewares/    # Auth validation, cookie parsing
├── helpers/        # Crypto helpers (hashing, salt, env variables)
└── index.ts        # App entry point
```

## ⚙️ Setup & Installation

Make sure you have **Docker** installed in your machine:

### Configure Environment Variables

```bash
cp env.example .env
```
#### ⚠️ Be careful when defining the MONGO_URI variable in your .env file, it must include the placeholders USERNAME and PASSWORD for the app to correctly inject your MongoDB credentials, as shown in the `src/index.ts` code snippet.


```bash
const username = encodeURIComponent(getRequiredEnvVariable('MONGODB_USER'));
const password = encodeURIComponent(getRequiredEnvVariable('MONGODB_PASS'));
const MONGO_URL = getRequiredEnvVariable('MONGODB_URI')
  .replace('<USERNAME>', username)
  .replace('<PASSWORD>', password);

```

### Run with Docker


```bash
docker compose up <--build> # start the application
```

The **--build** flag is only necessary when running for the first time or when integrating new changes in the project


```bash
docker compose down # shutdown the application
```