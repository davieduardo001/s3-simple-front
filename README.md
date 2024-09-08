#### Index

1. **Visão Geral do Projeto**
2. **Pré-requisitos**
3. **Configuração do Ambiente**
4. **Desenvolvimento e Testes**
5. **Pipeline de Deploy Contínuo**
6. **Configuração do GitHub Actions**
7. **Configuração do AWS S3**
8. **Monitoramento e Manutenção**
9. **Referências**

---

# Documentação do Projeto: Deploy Contínuo com React e AWS

## 1. Visão Geral do Projeto

O objetivo deste projeto é implementar uma solução de deploy contínuo para uma aplicação React utilizando computação em nuvem e soluções cloud-native com AWS. A pipeline de CI/CD será configurada para automatizar o processo de build e deploy da aplicação, garantindo que as atualizações no código sejam automaticamente refletidas no ambiente de produção.

**Tecnologias Utilizadas:**
- **React.js**: Framework para construção da interface do usuário.
- **GitHub**: Sistema de controle de versão e gerenciamento de código-fonte.
- **AWS S3**: Armazenamento de arquivos estáticos na nuvem.
- **GitHub Actions**: Plataforma de CI/CD para automação de workflows.

## 2. Pré-requisitos

Antes de iniciar a configuração do projeto, certifique-se de ter os seguintes pré-requisitos instalados e configurados:

- Node.js (versão 14.x ou superior)
- npm (ou yarn) para gerenciamento de pacotes
- Conta AWS com permissões para acessar o S3 e configurar buckets
- Conta GitHub e acesso ao repositório do projeto
- Ferramenta de linha de comando `aws-cli` (opcional, para interações com AWS)

## 3. Configuração do Ambiente

### 3.1 Clonando o Repositório

Clone o repositório do projeto para o seu ambiente local:

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

### 3.2 Instalando Dependências

Instale as dependências do projeto:

```bash
npm install
```

### 3.3 Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto para armazenar variáveis de ambiente, se necessário. Certifique-se de incluir variáveis relacionadas ao deploy e configurações específicas.

## 4. Desenvolvimento e Testes

Desenvolva e teste a aplicação localmente. Utilize os comandos a seguir para iniciar o servidor de desenvolvimento e verificar a aplicação:

```bash
npm start
```

Para rodar os testes:

```bash
npm test
```

## 5. Pipeline de Deploy Contínuo

### 5.1 Visão Geral da Pipeline

A pipeline de deploy contínuo automatiza o processo de build e deploy da aplicação para o AWS S3 sempre que mudanças são enviadas para o repositório GitHub. O processo é dividido em duas etapas principais:

1. **Build**: Geração dos arquivos estáticos da aplicação React.
2. **Deploy**: Upload dos arquivos estáticos para um bucket S3.

### 5.2 Configuração do GitHub Actions

Crie um arquivo de workflow no diretório `.github/workflows/` do seu repositório. Nomeie o arquivo como `deploy.yml` e adicione o seguinte conteúdo:

```yaml
name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Build application
      run: npm run build

    - name: Deploy to S3
      uses: jakejarvis/s3-sync-action@v0.5.7
      with:
        args: --acl public-read --follow-symlinks --delete ./build s3://<YOUR-S3-BUCKET-NAME>
      env:
        AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

Substitua `<YOUR-S3-BUCKET-NAME>` pelo nome do seu bucket S3.

### 5.3 Configuração dos Secrets no GitHub

Adicione as credenciais da AWS como secrets no seu repositório GitHub:

1. Vá para o repositório no GitHub.
2. Navegue para **Settings** > **Secrets and variables** > **Actions**.
3. Adicione os seguintes secrets:
   - `AWS_S3_BUCKET` – Nome do bucket S3.
   - `AWS_ACCESS_KEY_ID` – Chave de acesso da AWS.
   - `AWS_SECRET_ACCESS_KEY` – Chave secreta da AWS.

## 6. Configuração do AWS S3

### 6.1 Criar um Bucket S3

1. Acesse o console AWS S3.
2. Clique em **Create bucket**.
3. Siga as instruções para criar um bucket, garantindo que o bucket seja público para que os arquivos possam ser acessados via HTTP.

### 6.2 Configurar Permissões

Certifique-se de que o bucket tenha permissões apropriadas para leitura pública. Ajuste as permissões de acesso conforme necessário.

## 7. Monitoramento e Manutenção

### 7.1 Monitorar a Pipeline

Verifique a aba **Actions** no seu repositório GitHub para monitorar o status das execuções da pipeline. Verifique os logs para identificar e corrigir problemas.

### 7.2 Atualizar Dependências

Periodicamente, atualize as dependências do projeto e revise a configuração da pipeline para garantir compatibilidade com novas versões e melhores práticas.

## 8. Referências

- [Documentação do GitHub Actions](https://docs.github.com/en/actions)
- [Documentação do AWS S3](https://docs.aws.amazon.com/s3/index.html)
- [Documentação do React](https://reactjs.org/docs/getting-started.html)