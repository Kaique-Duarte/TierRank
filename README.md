# TierRank

Uma aplicação web para criar e gerenciar rankings de itens em diferentes categorias. Construída com Node.js + Express no backend e HTML/CSS/JavaScript no frontend.

## 📋 Pré-requisitos

Antes de começar, certifique-se de que você tem instalado:

- **Node.js** v16+ ([download](https://nodejs.org/))
- **npm** v8+ (incluído com Node.js) ou **yarn**
- **Git** (para clonar o repositório)

Para verificar se está tudo instalado:

```bash
node --version
npm --version
```

## 🪟 Instalação no Windows

Se você está usando **Windows**, siga estas instruções adicionais:

### 1. Instale o Node.js no Windows
- Acesse https://nodejs.org/
- Baixe a versão **LTS** (recomendado)
- Execute o instalador e siga os passos
- Marque a opção "Automatically install the necessary tools for native modules"
- **Importante:** Reinicie o computador após a instalação

### 2. Abra o Terminal Correto
Use uma destas opções (não recomendado usar PowerShell com npm):

✅ **Recomendado:**
- Command Prompt (cmd.exe) - pressione `Win + R`, digite `cmd`, Enter
- Terminal do Windows (Windows 11+)
- Git Bash (se tiver Git instalado)

❌ **Evitar:**
- PowerShell (pode ter conflitos com npm)

### 3. Verifique a Instalação
```cmd
node --version
npm --version
```

Se não reconhecer os comandos, reinicie o Command Prompt ou o computador.

### 4. Clone o Repositório
```cmd
git clone https://github.com/Kaique-Duarte/TierRank.git
cd TierRank
```

### 5. Instale as Dependências
```cmd
npm run install:all
```

### 6. Inicie o Projeto
```cmd
npm start


## 🚀 Instalação Rápida

### 1. Clone o repositório

```bash
git clone https://github.com/Kaique-Duarte/TierRank.git
cd TierRank
```

### 2. Instale as dependências

```bash
# Instala dependências do backend e frontend simultaneamente
npm run install:all
```

### 3. Inicie o servidor

```bash
npm start
```

Isso iniciará automaticamente:
- **Backend**: http://localhost:3000 (Node.js + Express)
- **Frontend**: http://localhost:8080 (Live Server)

## 📦 Comandos Disponíveis

No diretório raiz do projeto:

```bash
# Instala dependências de backend e frontend
npm run install:all

# Inicia o backend e frontend simultaneamente
npm start

# Inicia apenas o backend
npm run back

# Inicia apenas o frontend
npm run front
```

## 📁 Estrutura do Projeto

```
TierRank/
├── backend/                    # API REST com Node.js + Express
│   ├── server.js              # Arquivo principal do servidor
│   ├── package.json           # Dependências do backend
│   └── routes/                # Definição de rotas da API
│       ├── index.js           # Roteador principal
│       └── routes.js          # Rotas específicas
│
├── frontend/                   # Interface web
│   ├── index.html             # Página principal
│   ├── css/                   # Estilos CSS
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   ├── catalog.css
│   │   └── tier.css
│   ├── images/                # Assets do projeto
│   ├── package.json           # Dependências do frontend
│   └── node_modules/          # Dependências instaladas
│
├── package.json               # Configuração principal
└── README.md                  # Este arquivo
```

## 🛠 Tecnologias Utilizadas

### Backend
- **Express** `^5.2.1` - Framework web minimalista
- **JSZip** `^3.10.1` - Manipulação de arquivos ZIP
- **Node.js** - Runtime JavaScript

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização modular
- **JavaScript (Vanilla)** - Lógica de cliente
- **Live Server** `^1.2.2` - Servidor de desenvolvimento com hot reload

## 🔌 API Endpoints

Documentação dos principais endpoints da API (em `backend/routes/`):

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/` | Mensagem de boas-vindas |
| GET | `/api/dados` | Retorna dados da aplicação |

> **Nota:** Consulte `backend/routes/index.js` para a lista completa de endpoints.

## 🐛 Solução de Problemas

### Conflito de Portas

Se receber erro de porta já em uso:

**Linux/Mac:**
```bash
# Libere a porta 3000
lsof -ti:3000 | xargs kill -9
```

**Windows (Command Prompt como Administrador):**
```cmd
# Encontre o processo usando a porta 3000
netstat -ano | findstr :3000

# Feche o processo (substitua PID pelo número encontrado)
taskkill /PID [PID] /F
```

Ou simplesmente:
- Modifique o arquivo `backend/server.js` para usar outra porta
- Altere `const port = 3000` para `const port = 3001`

### Dependências não instaladas
```bash
# Force a reinstalação
npm run install:all
```

### npm: comando não encontrado (Windows)
1. Verifique se Node.js foi instalado corretamente
2. Reinicie o Command Prompt
3. Reinicie o computador
4. Se persistir, desinstale e reinstale Node.js

### Erro de permissão ao rodar npm (Windows)
1. Abra o Command Prompt **como Administrador**
   - Pressione `Win + R`, digite `cmd`, depois `Ctrl + Shift + Enter`
2. Tente rodar os comandos novamente

### Live Server não atualiza
Limpe o cache do navegador: `Ctrl + Shift + R` (Windows/Linux) ou `Cmd + Shift + R` (Mac)

## 📝 Desenvolvimento

### Adicionando Novas Rotas

1. Crie um novo arquivo em `backend/routes/`
2. Defina as rotas usando Express Router
3. Importe em `backend/routes/index.js`

Exemplo:
```javascript
// backend/routes/usuarios.js
import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ usuarios: [] })
})

export default router
```

### Estilizando o Frontend

Cada página tem seu próprio arquivo CSS em `frontend/css/`:
- `base.css` - Estilos globais
- `components.css` - Componentes reutilizáveis
- `layout.css` - Grid e flexbox
- `tier.css` - Estilos específicos de tier
- `catalog.css` - Estilos de catálogo

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença ISC - veja o arquivo `LICENSE` para detalhes.

## 📞 Suporte

Para reportar bugs ou sugerir melhorias, abra uma [issue no GitHub](https://github.com/Kaique-Duarte/TierRank/issues).

---

**Última atualização:** Abril de 2026