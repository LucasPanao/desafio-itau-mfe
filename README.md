<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
</head>
<body>

<h1>🚀 Microfrontends com Module Federation - Desafio Técnico Frontend</h1>

<p>Este projeto é a solução do <strong>desafio técnico de desenvolvedor frontend</strong>, utilizando <strong>Angular 15+</strong> e <strong>Module Federation</strong> para criar Microfrontends (MFEs).<br>
O objetivo é demonstrar habilidades em <strong>arquitetura de microfrontends</strong>, <strong>integração entre MFEs</strong>, <strong>consumo de APIs</strong> e <strong>manipulação de dados entre telas</strong>.</p>

<hr>

<h2>🏗 Estrutura do Projeto</h2>
<ul>
  <li><strong>Shell:</strong> Orquestrador dos MFEs e responsável pela navegação entre eles.</li>
  <li><strong>MFE Cadastro:</strong> Tela de cadastro de usuários (<strong>nome</strong> e <strong>e-mail</strong>).</li>
  <li><strong>MFE Sucesso:</strong> Tela que exibe os dados cadastrados pelo usuário.</li>
</ul>

<hr>

<h2>⚙️ Tecnologias</h2>
<ul>
  <li><strong>Angular 15+</strong></li>
  <li><strong>Module Federation</strong></li>
  <li><strong>json-server</strong> (backend mockado)</li>
  <li>HTML, CSS (Angular Material opcional)</li>
</ul>

<hr>

<h2>📦 Backend Mockado</h2>
<p>Para simular uma API REST, usamos o <strong>json-server</strong> com o seguinte mock:</p>

<pre>
{
  "users": [
    { "id": 1, "name": "João", "email": "joao@email.com" },
    { "id": 2, "name": "Maria", "email": "maria@email.com" }
  ]
}
</pre>

<p><strong>Endpoints disponíveis:</strong></p>
<ul>
  <li><strong>GET /users</strong> → retorna a lista de usuários</li>
  <li><strong>POST /users</strong> → adiciona um novo usuário</li>
</ul>

<hr>

<h2>🖥 Funcionalidades</h2>

<h3>Shell</h3>
<ul>
  <li>Contém o <strong>router-outlet</strong> para carregar os MFEs dinamicamente</li>
</ul>

<h3>MFE Cadastro</h3>
<ul>
  <li>Formulário com inputs para <strong>Nome</strong> e <strong>E-mail</strong></li>
  <li>Botão <strong>"Salvar"</strong> envia os dados para o backend mockado (<strong>POST /users</strong>)</li>
</ul>

<h3>MFE Sucesso</h3>
<ul>
  <li>Exibe os dados cadastrados na tela anterior a partir do botão Listar Todos (<strong>GET /users</strong>)</li>
</ul>

<hr>

<h2>🚀 Rodando o Projeto</h2>

<ol>
  <li><strong>Clone o repositório:</strong>
    <pre>git clone &lt;SEU_REPOSITORIO_GIT&gt;
cd &lt;PASTA_DO_PROJETO&gt;</pre>
  </li>
  <li><strong>Instale as dependências:</strong>
    <pre>npm install</pre>
  </li>
  <li><strong>Inicie o backend mockado:</strong>
    <pre>npx json-server --watch db.json --port 3000</pre>
  </li>
  <li><strong>Inicie os MFEs e o Shell (cada um em sua porta):</strong>
    <pre># Shell
ng serve shell --port 4200

# MFE Cadastro
ng serve cadastro --port 4201

# MFE Sucesso
ng serve sucesso --port 4202</pre>
  </li>
  <li><strong>Acesse a aplicação no navegador:</strong>
    <pre>http://localhost:4200</pre>
  </li>
</ol>

<hr>

<h2>📐 Arquitetura & Comunicação</h2>

<ul>
  <li><strong>Shell</strong> carrega os MFEs dinamicamente usando <strong>Module Federation</strong></li>
  <li><strong>MFE Cadastro</strong> envia dados via <strong>POST /users</strong></li>
  <li><strong>MFE Sucesso</strong> consome os dados via <strong>GET /users</strong></li>
  <li>Todos os dados persistem no backend mockado (<strong>json-server</strong>)</li>
</ul>

<h3>Diagrama de Sequência</h3>

<pre>
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
</pre>

<hr>

<h2>💡 Observações</h2>
<ul>
  <li>A estilização é simples, mas funcional</li>
  <li>Cada MFE é independente e carregado dinamicamente pelo <strong>Shell</strong></li>
  <li><strong>IA foi utilizada apenas para auxílio na escrita de prompts</strong> (Copilot, ChatGPT)</li>
</ul>

</body>
</html>
