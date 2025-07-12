# 💬 Let Me Ask

O **Let Me Ask** é um app de perguntas e respostas em tempo real para lives e eventos, onde os participantes podem enviar questões, votar nas mais relevantes e acompanhar se já foram respondidas. A proposta é organizar a participação do público, promovendo engajamento e clareza na comunicação.

---

## 🚀 Tecnologias e Conteúdos

Este projeto foi desenvolvido como uma aplicação full-stack, com as seguintes tecnologias e conceitos:

### 🔧 Back-end

- **Node.js**
- **Fastify**
- **Docker**
- **PostgreSQL** com **Drizzle ORM**
- **API REST**

### 🎨 Front-end

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM** (gerenciamento de rotas)
- **React Query** (consumo e cache de API)
- **Hooks personalizados**

### 🎤 Funcionalidades Avançadas

- Gravação de áudio no navegador
- Upload de áudio para o servidor
- Transcrição automática com **IA (API do Gemini)**
- Geração de **embeddings** e respostas inteligentes baseadas em IA

---

## ✨ Funcionalidades

- [x] Criação e entrada em salas
- [x] Envio de perguntas por texto ou áudio
- [x] Transcrição de áudio com inteligência artificial
- [x] Destaque para perguntas já respondidas

---

## 🛠️ Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/let-me-ask.git
cd let-me-ask
```

### 2. Configure o .env
```bash
cd backend
cp .env.example .env
```

### 3. Configure e rode o Back-end

```bash
docker compose up -d
npm install
npm run dev
```

### 4. Configure e rode o Front-end

```bash
cd ../frontend
npm install
npm run dev
```

---

## Estrutura do Projeto

let-me-ask/<br>
├── frontend/ # React + Vite + Tailwind + React Query + IA<br>
├── backend/ # Fastify + PostgreSQL + Drizzle ORM + API do Gemini<br>
