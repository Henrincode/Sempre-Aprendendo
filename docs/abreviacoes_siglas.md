# 🧾 Glossário Completo de Siglas, Abreviações e Termos — Programação e Desenvolvimento

**Objetivo:** ter um cheat sheet abrangente e utilizável como referência rápida para siglas, abreviações, padrões, técnicas e nomes comuns no mundo do desenvolvimento de software.

---

## 🔎 Como usar este documento

- Cada seção agrupa siglas por tema (Rede, Web, Banco de Dados, Ferramentas, Segurança etc.)
- Tabelas com colunas: **Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status**
- Onde existir ambiguidade (múltiplos significados), são listados os mais comuns
- No fim há uma lista de siglas obsoletas/deprecated e sugestões de substituição
- **Observação sobre ordenação:** as tabelas abaixo foram ordenadas alfabeticamente por sigla dentro de cada seção para facilitar consulta
- No final há um índice alfabético global (A→Z) com todas as siglas listadas

---

## 🌐 Rede, Protocolos e Infraestrutura

| Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **CDN** | Content Delivery Network — Rede de Entrega de Conteúdo | Rede de servidores distribuídos para entrega rápida de conteúdo estático | Exemplos: Cloudflare, Fastly, Akamai |
| **DHCP** | Dynamic Host Configuration Protocol — Protocolo de Configuração Dinâmica de Hosts | Atribui IPs dinamicamente em redes locais | Usado em redes domésticas e corporativas |
| **DNS** | Domain Name System — Sistema de Nomes de Domínio | Resolve nomes de domínio para endereços IP | Pode ser alvo de cache e ataques (DNS spoofing) |
| **FTP** | File Transfer Protocol — Protocolo de Transferência de Arquivos | Protocolo legado para transferência de arquivos | Substituído por SFTP/HTTPS |
| **HTTP** | HyperText Transfer Protocol — Protocolo de Transferência de Hipertexto | Protocolo de aplicação para troca de recursos web | Versões: HTTP/1.1, HTTP/2, HTTP/3 (QUIC) |
| **HTTPS** | HTTP Secure — HTTP Seguro (sobre TLS) | HTTP sobre TLS — criptografia entre cliente/servidor | Obrigatório em produção |
| **IP** | Internet Protocol — Protocolo de Internet | Protocolo de roteamento (IPv4 / IPv6) | Endereçamento de rede |
| **NAT** | Network Address Translation — Tradução de Endereços de Rede | Tradução de endereços privados para públicos | Muito usado em redes domésticas |
| **SFTP** | SSH File Transfer Protocol — Protocolo de Transferência de Arquivos via SSH | Transferência de arquivos sobre canal SSH | Recomendado sobre FTP |
| **SSL** | Secure Sockets Layer — Camada de Sockets Segura | Versões antigas de criptografia | Obsoleto — use TLS |
| **TCP** | Transmission Control Protocol — Protocolo de Controle de Transmissão | Protocolo de transporte orientado a conexão (retransmissões) | Usado por HTTP/HTTPS (até HTTP/3) |
| **TLS** | Transport Layer Security — Segurança da Camada de Transporte | Sucessor do SSL — criptografia de transporte | Use TLS 1.2/1.3 |
| **UDP** | User Datagram Protocol — Protocolo de Datagrama do Usuário | Protocolo de transporte sem conexão (menor latência) | Usado por DNS, VoIP, jogos |
| **VPN** | Virtual Private Network — Rede Privada Virtual | Rede criptografada sobre internet pública | Segurança e privacidade |
| **WWW** | World Wide Web — Rede Mundial de Computadores | Sistema de documentos em hipertexto | www2/www3 são subdomínios; Web3 = blockchain |

---

## 🌍 Web, APIs e Formatos de Dados

| Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **AJAX** | Asynchronous JavaScript and XML — JavaScript e XML Assíncronos | Técnica para criar apps web dinâmicos | Não é uma linguagem de programação |
| **API** | Application Programming Interface — Interface de Programação de Aplicações | Interface para comunicação entre softwares | Essencial para integração de sistemas |
| **CORS** | Cross-Origin Resource Sharing — Compartilhamento de Recursos Entre Origens | Política do browser para requisições cross-origin | Controlado por headers no servidor |
| **CSV** | Comma Separated Values — Valores Separados por Vírgula | Formato tabular simples | Útil para import/export |
| **GraphQL** | Graph Query Language — Linguagem de Consulta GraphQL | Linguagem/Runtime para APIs que permite consultas flexíveis | Requer schema e resolvers |
| **gRPC** | gRPC Remote Procedure Calls — Chamadas de Procedimento Remoto gRPC | RPC de alto desempenho (Protobuf + HTTP/2) | Bom para microservices |
| **JSON** | JavaScript Object Notation — Notação de Objetos JavaScript | Formato leve para troca de dados | Padrão em APIs modernas |
| **REST** | Representational State Transfer — Transferência de Estado Representacional | Estilo arquitetural para APIs HTTP | "RESTful" tem variações de implementação |
| **RSS** | Really Simple Syndication — Sindicação Simples | Formato/feed para publicar atualizações de conteúdo | Menos usado hoje, mas ainda comum em blogs |
| **SOAP** | Simple Object Access Protocol — Protocolo Simples de Acesso a Objetos | Protocolo de web services baseado em XML | Mais verboso; usado em sistemas legados |
| **SSE** | Server-Sent Events — Eventos Enviados pelo Servidor | Push unidirecional do servidor ao cliente | Simples para notificações em tempo real |
| **URI** | Uniform Resource Identifier — Identificador Uniforme de Recursos | Identificador de recurso (mais geral que URL) | Engloba URL e URN |
| **URL** | Uniform Resource Locator — Localizador Uniforme de Recursos | Endereço de recurso (ex.: https://ex.com/path) | Subtipo de URI |
| **WebSocket** | WebSocket — Canal bidirecional | Canal full-duplex entre cliente e servidor | Excelente para apps em tempo real |
| **XML** | eXtensible Markup Language — Linguagem de Marcação Extensível | Formato estruturado e verboso | Usado em SOAP e configs antigos |
| **YAML** | YAML Ain't Markup Language — YAML (config legível) | Formato legível usado em configs (k8s, CI) | Indentação sensível |

---

## 🔧 Métodos HTTP / REST API

| Sigla/Método | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **DELETE** | Delete — Deletar | Remove um recurso do servidor | Idempotente |
| **GET** | Get — Obter | Recupera recursos do servidor | Seguro e idempotente |
| **PATCH** | Patch — Atualização Parcial | Atualiza parcialmente um recurso | Não necessariamente idempotente |
| **POST** | Post — Postar/Criar | Cria um novo recurso | Não idempotente |
| **PUT** | Put — Atualizar/Substituir | Atualiza ou substitui completamente um recurso | Idempotente |

---

## 📊 Códigos de Status HTTP

| Código | Significado (EN) — Significado (PT) | O que é / Uso |
|--------|-------------------------------------|---------------|
| **1xx** | Informational — Informacional | Resposta provisória |
| **100** | Continue — Continuar | Cliente pode continuar a requisição |
| **101** | Switching Protocols — Mudando Protocolos | Servidor aceita mudar protocolo |
| **2xx** | Successful — Sucesso | Requisição bem-sucedida |
| **200** | OK — OK | Requisição bem-sucedida |
| **201** | Created — Criado | Recurso criado com sucesso |
| **202** | Accepted — Aceito | Requisição aceita para processamento |
| **204** | No Content — Sem Conteúdo | Sucesso sem corpo de resposta |
| **3xx** | Redirection — Redirecionamento | Cliente precisa tomar ação adicional |
| **301** | Moved Permanently — Movido Permanentemente | Recurso mudou permanentemente |
| **302** | Found — Encontrado | Redirecionamento temporário |
| **304** | Not Modified — Não Modificado | Recurso não foi modificado |
| **4xx** | Client Error — Erro do Cliente | Erro na requisição do cliente |
| **400** | Bad Request — Requisição Inválida | Sintaxe incorreta na requisição |
| **401** | Unauthorized — Não Autorizado | Autenticação necessária |
| **403** | Forbidden — Proibido | Servidor recusa autorização |
| **404** | Not Found — Não Encontrado | Recurso não encontrado |
| **405** | Method Not Allowed — Método Não Permitido | Método HTTP não permitido |
| **409** | Conflict — Conflito | Conflito com estado atual |
| **429** | Too Many Requests — Muitas Requisições | Limite de taxa excedido |
| **5xx** | Server Error — Erro do Servidor | Erro no servidor |
| **500** | Internal Server Error — Erro Interno do Servidor | Erro inesperado no servidor |
| **502** | Bad Gateway — Gateway Inválido | Resposta inválida do servidor upstream |
| **503** | Service Unavailable — Serviço Indisponível | Servidor temporariamente indisponível |
| **504** | Gateway Timeout — Timeout do Gateway | Timeout na resposta do servidor upstream |

---

## 💾 Bancos de Dados e Persistência

| Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **ACID** | Atomicity, Consistency, Isolation, Durability — Atomicidade, Consistência, Isolamento, Durabilidade | Propriedades de transações em RDBMS | Essencial para integridade |
| **BASE** | Basically Available, Soft state, Eventual consistency — Basicamente Disponível, Estado Volátil, Consistência Eventual | Filosofia para sistemas distribuídos (NoSQL) | Trade-off com ACID |
| **CRUD** | Create, Read, Update, Delete — Criar, Ler, Atualizar, Apagar | Operações básicas de persistência | Fundamental em qualquer sistema |
| **DBMS** | Database Management System — Sistema de Gerenciamento de Banco de Dados | Software para gerenciar bancos de dados | Ex.: MySQL, PostgreSQL |
| **IndexedDB** | Indexed Database API — API de Banco de Dados Indexado | Banco NoSQL no cliente (browser) | Armazena objetos/Blobs no navegador |
| **KV** | Key-Value — Chave-Valor | Modelo simples de armazenamento | Ex.: Redis, Memcached |
| **NewSQL** | New SQL — NewSQL | Bancos que combinam escalabilidade NoSQL com ACID | Ex.: CockroachDB, TiDB |
| **NoSQL** | Not Only SQL — Não Apenas SQL | Bancos não relacionais: document, key-value, column, graph | Ex.: MongoDB, Redis, Cassandra |
| **OLAP** | Online Analytical Processing — Processamento Analítico Online | Workloads analíticos (BI) | Data warehouses |
| **OLTP** | Online Transaction Processing — Processamento de Transações Online | Workloads transacionais | Bancos de produção |
| **ORM** | Object-Relational Mapping — Mapeamento Objeto-Relacional | Biblioteca para mapear objetos para tabelas | Ex.: Sequelize, TypeORM, Hibernate |
| **RDBMS** | Relational Database Management System — Sistema de Gerenciamento de BD Relacional | Gerenciador de BD relacional | Suporta ACID |
| **SQL** | Structured Query Language — Linguagem de Consulta Estruturada | Linguagem para bancos relacionais | Ex.: Postgres, MySQL, SQL Server |
| **SQLite** | SQLite — SQLite (banco embarcado) | Banco embarcado, leve | Bom para protótipos e apps mobile |

---

## 🗄️ Conceitos de Banco de Dados

| Termo | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **Indexing** | Indexação — Indexação | Estrutura para acelerar consultas | Melhora performance de SELECT |
| **Normalization** | Normalização — Normalização | Organizar dados para reduzir redundância | 1NF, 2NF, 3NF, BCNF |
| **Replication** | Replicação — Replicação | Duplicação de dados para alta disponibilidade | Síncrona ou assíncrona |
| **Sharding** | Fragmentação — Fragmentação | Divisão horizontal de dados entre servidores | Melhora escalabilidade |

---

## 🧭 Arquitetura & Padrões de Sistema

| Sigla/Padrão | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **CQRS** | Command Query Responsibility Segregation — Separação de Comando e Consulta | Separar leitura e escrita | Útil em sistemas complexos |
| **CSR** | Client-Side Rendering — Renderização no Lado do Cliente | Renderização no cliente | React/Angular puros |
| **Event Sourcing** | Event Sourcing — Armazenamento por Eventos | Armazenar estado como eventos imutáveis | Facilita auditability e replays |
| **Microservices** | Microservices Architecture — Arquitetura de Microsserviços | Serviços pequenos e independentes | Requer observability e orquestração |
| **MVC** | Model-View-Controller — Modelo-Visão-Controlador | Padrão de separação de camadas | Usado em frameworks back/front |
| **MVP** | Model-View-Presenter — Modelo-Visão-Apresentador | Padrão com presenter como intermediário | Melhora testabilidade |
| **MVVM** | Model-View-ViewModel — Modelo-Visão-ModeloDeVisão | Padrão com data-binding | Usado em Angular, WPF |
| **PWA** | Progressive Web App — Aplicativo Web Progressivo | Web app com capacidades nativas | Service Workers + manifest |
| **SaaS** | Software as a Service — Software como Serviço | Modelo de entrega de software | Ex.: Gmail, Salesforce |
| **SOA** | Service-Oriented Architecture — Arquitetura Orientada a Serviços | Arquitetura por serviços | Precursor dos microservices |
| **SPA** | Single Page Application — Aplicação de Página Única | App que roda em uma única página | Ex.: React apps |
| **SSG** | Static Site Generation — Geração de Site Estático | Gera HTML em build time | Ex.: Next.js, Gatsby |
| **SSR** | Server-Side Rendering — Renderização no Lado do Servidor | Renderização no servidor (melhor SEO) | Next.js, Nuxt.js |

---

## 🛠 Ferramentas, IDEs, Build & DevOps

| Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **CD** | Continuous Delivery / Deployment — Entrega / Deploy Contínuo | Entrega/implantação contínua | Pipelines automatizados |
| **CI** | Continuous Integration — Integração Contínua | Integração contínua (build/tests) | GitHub Actions, Jenkins, GitLab CI |
| **CLI** | Command Line Interface — Interface de Linha de Comando | Ferramentas via terminal | Ex.: git, npm, docker |
| **IaC** | Infrastructure as Code — Infraestrutura como Código | Descrever infra como código | Terraform, Pulumi, Ansible |
| **IDE** | Integrated Development Environment — Ambiente Integrado de Desenvolvimento | Ambiente com editor, debugger, integração | Ex.: VS Code, IntelliJ, Eclipse |
| **LTS** | Long-Term Support — Suporte de Longo Prazo | Versões com suporte prolongado | Node.js LTS, Ubuntu LTS |
| **NPM** | Node Package Manager — Gerenciador de Pacotes Node | Gerenciamento de pacotes JavaScript | Padrão do Node.js |
| **PNPM** | Performant NPM — NPM Performático | Gerenciador de pacotes otimizado | Economiza espaço em disco |
| **SDK** | Software Development Kit — Kit de Desenvolvimento de Software | Kit de desenvolvimento | APIs, libs, docs, ferramentas |
| **VCS** | Version Control System — Sistema de Controle de Versão | Controle de versão | Git é o padrão atual |
| **Yarn** | Yarn — Yarn | Gerenciador de pacotes alternativo ao NPM | Desenvolvido pelo Facebook |

---

## 🔀 Git & Controle de Versão

| Comando/Termo | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **Branch** | Branch — Ramificação | Linha independente de desenvolvimento | Isola features/fixes |
| **Clone** | Clone — Clonar | Copiar repositório remoto localmente | `git clone <url>` |
| **Commit** | Commit — Confirmação | Salvar mudanças no histórico | `git commit -m "mensagem"` |
| **Fetch** | Fetch — Buscar | Baixar mudanças do remoto sem mesclar | `git fetch` |
| **Fork** | Fork — Bifurcação | Cópia independente de repositório | Comum em contribuições open source |
| **Merge** | Merge — Mesclar | Combinar branches | Preserva histórico completo |
| **Pull** | Pull — Puxar | Fetch + Merge | `git pull` |
| **Push** | Push — Empurrar | Enviar commits para remoto | `git push` |
| **Rebase** | Rebase — Rebasear | Reaplica commits em nova base | Reescreve histórico |
| **Stash** | Stash — Guardar | Guardar mudanças temporariamente | `git stash` |

---

## 📦 Containers, Orquestração, Cloud

| Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **AWS** | Amazon Web Services — Serviços Web da Amazon | Plataforma cloud da Amazon | Líder de mercado |
| **Azure** | Microsoft Azure — Azure da Microsoft | Plataforma cloud da Microsoft | Segunda maior cloud |
| **Docker** | Docker — Docker (plataforma de containers) | Plataforma de containers | Padrão para empacotamento |
| **EC2** | Elastic Compute Cloud — Nuvem de Computação Elástica | Instâncias virtuais na AWS | VMs escaláveis |
| **ECS** | Elastic Container Service — Serviço de Container Elástico | Orquestração de containers AWS | Alternativa ao Kubernetes |
| **EKS** | Elastic Kubernetes Service — Serviço Kubernetes Elástico | Kubernetes gerenciado na AWS | Kubernetes as a Service |
| **FaaS** | Function as a Service — Função como Serviço | Serverless functions | AWS Lambda, Google Cloud Functions |
| **GCP** | Google Cloud Platform — Plataforma Cloud do Google | Plataforma cloud do Google | Terceira maior cloud |
| **IAM** | Identity and Access Management — Gerenciamento de Identidade e Acesso | Controle de acesso e permissões | Essencial para segurança |
| **IaaS** | Infrastructure as a Service — Infraestrutura como Serviço | Fornece VMs, storage | AWS EC2, Azure VMs |
| **K8s** | Kubernetes — Kubernetes (orquestrador) | Orquestrador de containers | Escala e orquestração de serviços |
| **OCI** | Open Container Initiative — Iniciativa Aberta de Containers | Padrões para imagens e runtimes | Convenção para imagens |
| **PaaS** | Platform as a Service — Plataforma como Serviço | Fornece runtime e deploy | Heroku, Elastic Beanstalk |
| **S3** | Simple Storage Service — Serviço de Armazenamento Simples | Object storage da AWS | Armazenamento escalável |
| **VPC** | Virtual Private Cloud — Nuvem Privada Virtual | Rede isolada na cloud | Controle total de rede |
| **VM** | Virtual Machine — Máquina Virtual | Máquina virtual completa | Maior overhead que containers |

---

## 🔐 Segurança & Autenticação

| Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **2FA** | Two-Factor Authentication — Autenticação de Dois Fatores | Autenticação com dois métodos | Aumenta segurança |
| **AES** | Advanced Encryption Standard — Padrão de Criptografia Avançado | Algoritmo de criptografia simétrica | Padrão do governo dos EUA |
| **CORS** | Cross-Origin Resource Sharing — Compartilhamento de Recursos Entre Origens | Política de segurança do browser | Evita requisições não autorizadas |
| **CSRF** | Cross-Site Request Forgery — Falsificação de Requisições Entre Sites | Ataque que usa credenciais do usuário | Proteja com tokens/headers |
| **DES** | Data Encryption Standard — Padrão de Criptografia de Dados | Algoritmo de criptografia obsoleto | Substituído por AES |
| **HSTS** | HTTP Strict Transport Security — Segurança Estrita de Transporte HTTP | Força uso de HTTPS no browser | Ative em produção |
| **JWT** | JSON Web Token — Token Web em JSON | Token compacto para claims/auth | Cuidado com revogação/expiração |
| **MFA** | Multi-Factor Authentication — Autenticação Multifatorial | Autenticação com múltiplos fatores | Recomendado para segurança |
| **OAuth** | Open Authorization — Autorização Aberta | Delegação de autorização | OAuth2 é padrão para login social |
| **OIDC** | OpenID Connect — OpenID Connect | Camada de identidade sobre OAuth2 | Autenticação federada |
| **SSO** | Single Sign-On — Login Único | Login único para múltiplos sistemas | Melhora UX corporativa |
| **WAF** | Web Application Firewall — Firewall de Aplicação Web | Protege apps web | Ex.: AWS WAF, Cloudflare WAF |
| **XSS** | Cross-Site Scripting — Execução de Script entre Sites | Injeção de script no cliente | Escape/validação é essencial |

---

## 🧪 Testes & Qualidade

| Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **A/B Testing** | A/B Testing — Teste A/B | Experimentos de UX com duas versões | Otimiza conversão |
| **ATDD** | Acceptance Test Driven Development — Desenvolvimento Orientado por Testes de Aceitação | Testes baseados em critérios de aceitação | Envolve stakeholders |
| **BDD** | Behavior Driven Development — Desenvolvimento Orientado por Comportamento | Testes orientados por comportamento | Ferramentas: Cucumber, SpecFlow |
| **E2E** | End to End — Testes de Ponta a Ponta | Testes que simulam fluxo do usuário | Cypress, Playwright, Selenium |
| **QA** | Quality Assurance — Garantia de Qualidade | Garantia de qualidade | Área/processo |
| **TDD** | Test Driven Development — Desenvolvimento Orientado a Testes | Escrever testes antes do código | Ajuda design e regressão |
| **Unit Test** | Unit Test — Teste Unitário | Teste de unidades isoladas de código | Base da pirâmide de testes |

---

## ⚙️ Observability, Logs & Monitoring

| Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **APM** | Application Performance Monitoring — Monitoramento de Performance de Aplicações | Monitoramento de performance de apps | NewRelic, Datadog, Dynatrace |
| **ELK** | Elasticsearch-Logstash-Kibana — Stack ELK | Stack de logs e busca | Muito usado para observability |
| **EFK** | Elasticsearch-Fluentd-Kibana — Stack EFK | Stack de logs alternativa | Fluentd substitui Logstash |
| **OTEL** | OpenTelemetry — OpenTelemetry | Standard para traces/metrics/logs | Integrações para muitas ferramentas |
| **Prometheus** | Prometheus — Prometheus | Sistema de métricas e alertas | Pair com Grafana para dashboards |
| **SLA** | Service Level Agreement — Acordo de Nível de Serviço | Acordo de nível de serviço | Contrato com garantias |
| **SLI** | Service Level Indicator — Indicador de Nível de Serviço | Métrica mensurável | Ex.: latência, disponibilidade |
| **SLO** | Service Level Objective — Objetivo de Nível de Serviço | Meta interna de qualidade | Mais restrito que SLA |

---

## 🧠 Conceitos de Programação & Padrões

| Sigla/Conceito | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **DI** | Dependency Injection — Injeção de Dependências | Injeção de dependências para testabilidade | Frameworks suportam isso |
| **DRY** | Don't Repeat Yourself — Não Se Repita | Princípio para evitar duplicação | Boas práticas |
| **FP** | Functional Programming — Programação Funcional | Paradigma funcional | Funções puras, imutabilidade |
| **KISS** | Keep It Simple, Stupid — Mantenha Simples | Princípio de simplicidade | Boas práticas |
| **OOP** | Object Oriented Programming — Programação Orientada a Objetos | Paradigma orientado a objetos | Classes, herança, polimorfismo |
| **SOLID** | Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion | Conjunto de 5 princípios OOP | Ajuda estrutura de código |
| **SRP** | Single Responsibility Principle — Princípio da Responsabilidade Única | Uma classe deve ter apenas uma razão para mudar | Parte do SOLID |
| **OCP** | Open-Closed Principle — Princípio Aberto-Fechado | Aberto para extensão, fechado para modificação | Parte do SOLID |
| **LSP** | Liskov Substitution Principle — Princípio da Substituição de Liskov | Subtipos devem ser substituíveis por tipos base | Parte do SOLID |
| **ISP** | Interface Segregation Principle — Princípio da Segregação de Interfaces | Muitas interfaces específicas > uma geral | Parte do SOLID |
| **DIP** | Dependency Inversion Principle — Princípio da Inversão de Dependências | Depender de abstrações, não implementações | Parte do SOLID |
| **YAGNI** | You Aren't Gonna Need It — Você Não Vai Precisar Disso | Evitar implementar funcionalidades não necessárias | Filosofia ágil |

---

## 🖥 Front-end & UX

| Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **ARIA** | Accessible Rich Internet Applications — Acessibilidade para Aplicações Web | Atributos para acessibilidade | Aumenta usabilidade para screen readers |
| **CLS** | Cumulative Layout Shift — Deslocamento Cumulativo de Layout | Métrica de estabilidade visual | Core Web Vital |
| **CSS** | Cascading Style Sheets — Folhas de Estilo em Cascata | Estilos para HTML | Flexbox, Grid, animações |
| **DOM** | Document Object Model — Modelo de Objeto de Documento | API para manipular o HTML | Essencial para front-end |
| **FCP** | First Contentful Paint — Primeira Renderização de Conteúdo | Tempo até primeiro conteúdo | Core Web Vital |
| **FID** | First Input Delay — Atraso da Primeira Interação | Tempo de resposta à interação | Core Web Vital (substituído por INP) |
| **HTML** | HyperText Markup Language — Linguagem de Marcação de Hipertexto | Marcações para conteúdo web | Estrutura do DOM |
| **INP** | Interaction to Next Paint — Interação até Próxima Pintura | Responsividade a interações | Substitui FID |
| **JS** | JavaScript — JavaScript | Linguagem de programação web | Node.js server-side também |
| **LCP** | Largest Contentful Paint — Maior Renderização de Conteúdo | Tempo até maior elemento visível | Core Web Vital |
| **SEO** | Search Engine Optimization — Otimização para Motores de Busca | Otimização para mecanismos de busca | Melhora ranqueamento |
| **TS** | TypeScript — TypeScript | Superset do JS com tipos | Recomendado para projetos grandes |
| **UI** | User Interface — Interface do Usuário | Interface visual | Design de interação |
| **UX** | User Experience — Experiência do Usuário | Experiência completa do usuário | Design centrado no usuário |

---

## 🔁 Metodologias Ágeis & Gestão

| Sigla/Termo | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **Agile** | Agile — Ágil | Metodologia iterativa e incremental | Manifesto Ágil (2001) |
| **Backlog** | Backlog — Lista de Pendências | Lista priorizada de trabalho | Product backlog, Sprint backlog |
| **Kanban** | Kanban — Kanban | Método visual de gestão de fluxo | Foco em WIP limits |
| **KPI** | Key Performance Indicator — Indicador-chave de Performance | Métricas de negócio | Mede sucesso |
| **OKR** | Objectives and Key Results — Objetivos e Resultados-Chave | Framework de metas | Usado por Google, LinkedIn |
| **PoC** | Proof of Concept — Prova de Conceito | Validação de viabilidade | Protótipo inicial |
| **Scrum** | Scrum — Scrum | Framework ágil com sprints | Roles: PO, SM, Dev Team |
| **SDLC** | Software Development Life Cycle — Ciclo de Vida de Desenvolvimento de Software | Processo de desenvolvimento | Fases: planejamento, design, dev, teste, deploy |
| **Sprint** | Sprint — Sprint | Ciclo de trabalho fixo (1-4 semanas) | Scrum |
| **Standup** | Daily Standup — Reunião Diária | Reunião curta diária | Sincronização do time |
| **Waterfall** | Waterfall — Cascata | Metodologia sequencial tradicional | Fases lineares |
| **WIP** | Work In Progress — Trabalho em Progresso | Trabalho sendo executado atualmente | Kanban limita WIP |

---

## 🧾 Ferramentas, Frameworks e Bibliotecas

| Nome | O que é | Observações |
|------|---------|------------|
| **Angular** | Framework completo (Google) | Opinionated, TypeScript |
| **Bootstrap** | Framework CSS | Componentes UI responsivos |
| **Django** | Framework Python | Batteries-included |
| **Express** | Framework minimal para Node.js | Muito usado para APIs |
| **Flask** | Microframework Python | Leve e extensível |
| **Laravel** | Framework PHP | MVC, Eloquent ORM |
| **Next.js** | Framework React com SSR/SSG | Vercel |
| **Node.js** | Runtime JavaScript no servidor | Event-driven, non-blocking I/O |
| **Nuxt.js** | Framework Vue com SSR/SSG | Vue equivalente ao Next.js |
| **Rails** | Ruby on Rails | Convenção sobre configuração |
| **React** | Biblioteca UI (Meta/Facebook) | SPA, virtual DOM |
| **Spring** | Framework Java | Enterprise-grade |
| **Svelte** | Framework JavaScript compilado | Sem virtual DOM |
| **Tailwind CSS** | Framework CSS utility-first | Classes utilitárias |
| **Vite** | Build tool rápido | Substituto moderno do Webpack |
| **Vue** | Framework progressivo | Curva suave de aprendizado |
| **Webpack** | Module bundler | Empacotador de módulos |

---

## 🔁 Abreviações Organizacionais e de Processo

| Sigla | Significado (EN) — Significado (PT) | Observações |
|-------|-------------------------------------|------------|
| **CEO** | Chief Executive Officer — Diretor(a) Executivo(a) | Cargo executivo máximo |
| **CFO** | Chief Financial Officer — Diretor(a) Financeiro(a) | Cargo executivo |
| **CTO** | Chief Technology Officer — Diretor(a) de Tecnologia | Cargo executivo |
| **MVP** | Minimum Viable Product — Produto Mínimo Viável | Versão inicial com features essenciais |
| **PM** | Project Manager / Product Manager — Gerente de Projeto / Produto | Gestão de projetos/produtos |
| **SME** | Subject Matter Expert — Especialista no Assunto | Expert em área específica |

---

## 🪙 Blockchain, Web3 & Criptomoedas

| Sigla/Termo | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **Blockchain** | Blockchain — Cadeia de Blocos | Ledger descentralizado e distribuído | Tecnologia base do Bitcoin |
| **BTC** | Bitcoin — Bitcoin | Primeira e maior criptomoeda | Moeda digital descentralizada |
| **DAO** | Decentralized Autonomous Organization — Organização Autônoma Descentralizada | Organização governada por votação | Baseada em smart contracts |
| **dApp** | Decentralized Application — Aplicação Descentralizada | App rodando em blockchain | Sem controle centralizado |
| **DeFi** | Decentralized Finance — Finanças Descentralizadas | Serviços financeiros em blockchain | Empréstimos, trading sem bancos |
| **DEX** | Decentralized Exchange — Corretora Descentralizada | Exchange peer-to-peer | Ex.: Uniswap, PancakeSwap |
| **ENS** | Ethereum Name Service — Serviço de Nomes Ethereum | Sistema de domínios blockchain | Resolve para endereços wallet |
| **ETH** | Ethereum — Ethereum | Segunda maior criptomoeda | Plataforma para smart contracts |
| **Gas** | Gas Fee — Taxa de Gás | Taxa paga para transações blockchain | Varia com demanda da rede |
| **ICO** | Initial Coin Offering — Oferta Inicial de Moeda | Captação de recursos via tokens | Equivalente a IPO |
| **NFT** | Non-Fungible Token — Token Não Fungível | Token único representando ativos digitais | Arte, música, colecionáveis |
| **Smart Contract** | Smart Contract — Contrato Inteligente | Contrato autoexecutável em blockchain | Código é lei |
| **Web3** | Web 3.0 — Web 3.0 | Internet descentralizada | Blockchain, cripto, descentralização |

---

## 🤖 Inteligência Artificial & Machine Learning

| Sigla | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|-------|-------------------------------------|---------------|---------------------|
| **AGI** | Artificial General Intelligence — Inteligência Artificial Geral | IA com capacidades humanas gerais | Ainda teórico |
| **AI** | Artificial Intelligence — Inteligência Artificial | Simulação de inteligência humana | Amplo campo |
| **ANI** | Artificial Narrow Intelligence — Inteligência Artificial Restrita | IA especializada em uma tarefa | Estado atual da IA |
| **CNN** | Convolutional Neural Network — Rede Neural Convolucional | Tipo de rede neural para visão computacional | Usado em reconhecimento de imagem |
| **CV** | Computer Vision — Visão Computacional | IA para processar imagens/vídeos | Reconhecimento facial, OCR |
| **DL** | Deep Learning — Aprendizado Profundo | Subset de ML com redes neurais profundas | Múltiplas camadas |
| **DNN** | Deep Neural Network — Rede Neural Profunda | Rede neural com muitas camadas | Base do deep learning |
| **GPT** | Generative Pre-trained Transformer — Transformador Pré-treinado Generativo | Modelo de linguagem | ChatGPT, GPT-4 |
| **GPU** | Graphics Processing Unit — Unidade de Processamento Gráfico | Processador para computação paralela | Essencial para treinamento de IA |
| **LLM** | Large Language Model — Modelo de Linguagem Grande | Modelo de IA treinado em textos massivos | GPT, BERT, LLaMA |
| **ML** | Machine Learning — Aprendizado de Máquina | Subset de IA que aprende com dados | Algoritmos que melhoram com experiência |
| **MLE** | Maximum Likelihood Estimation — Estimação de Máxima Verossimilhança | Método estatístico | Usado em ML |
| **NLP** | Natural Language Processing — Processamento de Linguagem Natural | IA para entender linguagem humana | Chatbots, tradução |
| **RL** | Reinforcement Learning — Aprendizado por Reforço | Aprendizado por recompensas/penalidades | Usado em jogos, robótica |
| **RNN** | Recurrent Neural Network — Rede Neural Recorrente | Rede neural para dados sequenciais | Séries temporais, texto |
| **TPU** | Tensor Processing Unit — Unidade de Processamento de Tensores | Chip especializado para ML | Desenvolvido pelo Google |

---

## 📝 Licenças de Software

| Licença | Significado (EN) — Significado (PT) | O que é / Uso | Observações / Status |
|---------|-------------------------------------|---------------|---------------------|
| **Apache 2.0** | Apache License 2.0 — Licença Apache 2.0 | Licença permissiva com proteção de patentes | Permite uso comercial |
| **BSD** | Berkeley Software Distribution — Distribuição de Software Berkeley | Licença permissiva | Variantes: 2-clause, 3-clause |
| **GPL** | GNU General Public License — Licença Pública Geral GNU | Licença copyleft | Derivados devem ser GPL |
| **GPLv2** | GPL version 2 — GPL versão 2 | Segunda versão da GPL | Usada pelo Linux |
| **GPLv3** | GPL version 3 — GPL versão 3 | Terceira versão da GPL | Proteções adicionais |
| **ISC** | Internet Systems Consortium — Consórcio de Sistemas de Internet | Licença permissiva simples | Similar à MIT |
| **LGPL** | GNU Lesser General Public License — Licença Pública Geral Menor GNU | GPL menos restritiva | Permite linking com proprietário |
| **MIT** | MIT License — Licença MIT | Licença permissiva mais popular | Muito simples e liberal |
| **MPL** | Mozilla Public License — Licença Pública Mozilla | Licença copyleft fraca | Híbrido entre MIT e GPL |
| **Unlicense** | Unlicense — Sem Licença | Domínio público | Sem restrições |

---

## ⚠️ Siglas / Tecnologias Obsoletas ou Depreciadas

| Sigla/Tecnologia | Substituir por | Observações |
|------------------|----------------|------------|
| **FTP** | SFTP ou HTTPS | Inseguro, sem criptografia |
| **keyCode** | `key` property | Eventos de teclado modernos |
| **SSL** | TLS | Protocolo obsoleto |
| **XML-RPC** | REST, GraphQL, gRPC | Verboso e ultrapassado |
| **SOAP** | REST, GraphQL | Ainda usado em legados, mas verboso |

---

## 🔍 Índice Alfabético Global (A → Z)

Abaixo, lista consolidada de todas as siglas/termos presentes no documento para busca rápida.

### A
2FA, A/B Testing, ACID, AES, AGI, Agile, AI, AJAX, ANI, Angular, API, APM, Apache, ARIA, ATDD, AWS, Azure

### B
Backlog, BASE, BDD, Blockchain, Bootstrap, Branch, BSD, BTC

### C
CD, CDN, CEO, CFO, CLI, Clone, CLS, CNN, Commit, CORS, CQRS, CRUD, CSRF, CSR, CSS, CSV, CTO, CV

### D
DAO, dApp, DBMS, DeFi, DELETE, DES, DEX, DHCP, DI, Django, DIP, DL, DNN, DNS, Docker, DOM, DRY, DeFi

### E
E2E, EC2, ECS, EFK, EKS, ELK, ENS, ETH, Event Sourcing, Express

### F
FaaS, FCP, FID, Flask, Fork, FP, FTP, Fetch

### G
Gas, GCP, GET, GPL, GPT, GPU, gRPC, GraphQL

### H
HTML, HTTP, HTTPS, HSTS

### I
IaaS, IAM, IaC, ICO, IDE, IndexedDB, INP, IoC, IP, ISC, ISP, IaC

### J
JS, JSON, JWT

### K
K8s, Kanban, KISS, KPI, KV

### L
Laravel, LCP, LGPL, LLM, LSP, LTS

### M
MFA, Merge, Microservices, MIT, ML, MLE, MPL, MVP (pattern), MVP (product), MVC, MVVM

### N
NAT, NewSQL, Next.js, NFT, NLP, Node.js, NoSQL, NPM, Nuxt.js

### O
OAuth, OCI, OCP, OIDC, OLAP, OLTP, OOP, ORM, OTEL, OKR

### P
PaaS, PATCH, PM, PNPM, POST, Prometheus, Pull, Push, PUT, PWA

### Q
QA

### R
Rails, React, Rebase, Replication, REST, RL, RNN, RSS

### S
S3, SaaS, Scrum, SDK, SDLC, SEO, SFTP, Sharding, SLA, SLI, SLO, Smart Contract, SME, SOA, SOAP, SOLID, SPA, Sprint, SQL, SQLite, SRP, SSE, SSG, SSO, SSR, SSL, Standup, Stash, Svelte

### T
Tailwind, TCP, TDD, TLS, TPU, TS

### U
UDP, UI, Unlicense, URI, URL, UX

### V
VCS, Vite, VM, VPC, VPN, Vue

### W
WAF, Waterfall, Web3, Webpack, WebSocket, WIP, WWW

### X
XML, XSS

### Y
YAGNI, YAML, Yarn