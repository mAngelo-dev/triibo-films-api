# Filmes API

API REST para gerenciamento de filmes com integração à OMDB API para detalhes.

---

## Tecnologias Utilizadas

- Node.js
- Express.js
- TypeScript
- Firebase Admin SDK
- Axios
- JWT Authentication
- Firestore Database
- Nodemon (para desenvolvimento)

---

## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter instalado:

- **Node.js** (versão 24+)  
    https://nodejs.org/

Verifique se está tudo OK:

```sh
node -v
npm -v
```

---

## Configuração

No projeto foi deixado dois arquivos de configuração do projeto, eles se fazem necessários
para o funcionamento, **.env** e **firebaseKey.json**, na raíz do projeto você pode verificar exemplos de chaves necessárias.
Caso seja necessário, abra o console do firebase em: https://console.firebase.google.com/

Caso ainda não tenha um Projeto e/ou Firestore Database configurado, configure e em seguida gere suas senhas clicando nas configurações e adicionando um novo aplicativo WEB.

Irá ser gerado algo como:
```
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "token",
  authDomain: "exemplo.firebaseapp.com",
  projectId: "exemplo-e072f",
  storageBucket: "exemplo.firebasestorage.app",
  messagingSenderId: "1",
  appId: "1"
};

const app = initializeApp(firebaseConfig);
```

No entanto, utilize o arquivo de exemplo e coloque os valores de ``firebaseConfig`` dentro deles.


---

## Instalação

Para que possa executar o projeto, é necessário que sejam instalados todas as dependências, 
para isso rode no terminal
```sh
npm install 
```
---

## Execução

### Modo DEV:
Para rodar o projeto em modo dev utilize:

```sh
npm run dev
```

