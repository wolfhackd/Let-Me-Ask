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
npx drizzle-kit push
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

## 🧑‍💻 Como usar a interface

### 1. Acesse o front-end
Abra o navegador e vá para:
👉 http://localhost:5173

### 2. Crie ou entre em uma sala
Você pode criar uma nova sala, gerando um código exclusivo.
Ou entrar em uma sala já existente, digitando o código correspondente.
As salas representam sessões de perguntas de uma live, evento ou aula.

### 3. Durante a sessão
Assim que estiver dentro da sala:
O orientador pode usar o botão de microfone (no topo da tela) para gravar perguntas verbalmente.
O áudio é enviado ao servidor, transcrito automaticamente com IA (API do Gemini) e exibido como texto na interface.

### 4. Participantes enviam dúvidas
Quem tiver dúvidas pode:
Digitar a pergunta no chat.

### 5. IA responde automaticamente
Quando uma nova pergunta é enviada:
O sistema verifica se já existe uma pergunta semelhante que foi respondida anteriormente.
Se encontrar, a IA retorna automaticamente a resposta com base na transcrição e contexto.

### 6. Visualização das perguntas
As perguntas são exibidas em tempo real.
As que já foram respondidas ficam marcadas ou destacadas, para facilitar o acompanhamento.
