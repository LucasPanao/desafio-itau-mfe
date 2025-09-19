🚀 Microfrontends com Module Federation - Desafio Técnico Frontend

Este projeto é a solução do desafio técnico de desenvolvedor frontend, utilizando Angular 15+ e Module Federation para criar Microfrontends (MFEs).
O objetivo é demonstrar habilidades em arquitetura de microfrontends, integração entre MFEs, consumo de APIs e manipulação de dados entre telas.

🏗 Estrutura do Projeto

O projeto contém três MFEs e um Shell que os orquestra:

Shell: Orquestrador dos MFEs e responsável pela navegação entre eles.

MFE Cadastro: Tela de cadastro de usuários (nome e e-mail).

MFE Sucesso: Tela que exibe os dados cadastrados pelo usuário.

⚙️ Tecnologias

Angular 15+

Module Federation

json-server (backend mockado)

HTML, CSS (Angular Material opcional)

📦 Backend Mockado

Para simular uma API REST, usamos o json-server com o seguinte mock:

{
  "users": [
    { "id": 1, "name": "João", "email": "joao@email.com" },
    { "id": 2, "name": "Maria", "email": "maria@email.com" }
  ]
}


Endpoints disponíveis:

GET /users → retorna a lista de usuários

POST /users → adiciona um novo usuário

🖥 Funcionalidades
Shell

Contém o router-outlet para carregar os MFEs dinamicamente

MFE Cadastro

Formulário com inputs para Nome e E-mail

Botão "Salvar" envia os dados para o backend mockado (POST /users)

MFE Sucesso

Exibe os dados cadastrados na tela anterior a partir do botão Listar Todos (GET /users)

🚀 Rodando o Projeto

Clone o repositório:

git clone <SEU_REPOSITORIO_GIT>
cd <PASTA_DO_PROJETO>


Instale as dependências:

npm install


Inicie o backend mockado:

npx json-server --watch db.json --port 3000


Inicie os MFEs e o Shell (cada um em sua porta):

# Shell
ng serve shell --port 4200

# MFE Cadastro
ng serve cadastro --port 4201

# MFE Sucesso
ng serve sucesso --port 4202


Acesse a aplicação no navegador:

http://localhost:4200

📐 Arquitetura & Comunicação

Shell carrega os MFEs dinamicamente usando Module Federation.

MFE Cadastro envia dados via POST /users.

MFE Sucesso consome os dados via GET /users.

Todos os dados persistem no backend mockado (json-server).

Diagrama de Sequência
sequenceDiagram
    participant Usuário
    participant Cadastro
    participant Backend
    participant Sucesso

    Usuário->>Cadastro: Preenche Nome e Email
    Cadastro->>Backend: POST /users
    Backend-->>Cadastro: Confirmação de cadastro
    Usuário->>Sucesso: Acessa a tela de sucesso
    Sucesso->>Backend: GET /users
    Backend-->>Sucesso: Retorna dados cadastrados

💡 Observações

A estilização é simples, mas funcional.

Cada MFE é independente e carregado dinamicamente pelo Shell.

IA foi utilizada apenas para auxílio na escrita de prompts (Copilot, ChatGPT).
