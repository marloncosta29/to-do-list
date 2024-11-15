# To-Do List

Um projeto simples de lista de tarefas ("To-Do List") desenvolvido com **Vite**, **React**, **TailwindCSS** e **Zustand**. Este projeto permite que os usuários adicionem e excluam tarefas, com foco em uma estrutura bem organizada e design baseado no conceito **Atomic Design**.

---

## 🚀 Tecnologias e Ferramentas

- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida.
- **[React](https://reactjs.org/)**: Biblioteca para construção da interface.
- **[Zustand](https://zustand-demo.pmnd.rs/)**: Gerenciamento de estado simples e eficiente.
- **[TailwindCSS](https://tailwindcss.com/)**: Framework para estilização.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript para tipagem estática.
- **[Phosphor Icons](https://phosphoricons.com/)**: Ícones personalizáveis.

---

## 📂 Estrutura de Pastas

A aplicação segue uma estrutura de organização pensada para escalabilidade e clareza:
```shell
src/ 
├── assets/ # Arquivos estáticos (imagens, fontes, etc.) 
├── components/ # Componentes reutilizáveis (Atomic Design) 
├── pages/ # Páginas principais da aplicação 
├── store/ # Gerenciamento de estado com Zustand 
└── App.tsx # Componente raiz da aplicação
```
---

---

## 📦 Scripts Disponíveis

### `npm run dev`
Inicia o servidor de desenvolvimento.

### `npm run build`
Realiza o build de produção.

### `npm run preview`
Executa o build gerado em ambiente local.

---

## 🔧 Configuração do Ambiente de Desenvolvimento

### Pré-requisitos
- **Node.js** versão 18 ou superior.
- **npm** (gerenciador de pacotes).

### Instalação
1. Clone este repositório:
   ```bash
    git clone https://github.com/seu-usuario/to-list.git
    cd to-list
   ```
2. Instale as dependências:
   ```bash
    npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
    npm run dev
   ```
---

## Interface da Aplicação

A interface da aplicação foi projetada para ser simples e funcional. Ela possui as seguintes funcionalidades:

- Um campo de texto onde os usuários podem adicionar novas tarefas.
- Um botão para excluir tarefas existentes da lista.
- Um botão para concluir tarefas existentes da lista.
- Uma exibição em tempo real da lista de tarefas, que é atualizada automaticamente conforme as tarefas são adicionadas ou removidas.

---

## Principais Conceitos

Este projeto utiliza os seguintes conceitos e práticas para garantir organização e eficiência:

1. **Atomic Design**: Os componentes da aplicação são organizados seguindo o padrão Atomic Design, o que facilita a reutilização e manutenção do código.

2. **Gerenciamento de Estado**: O Zustand é utilizado como biblioteca de gerenciamento de estado, oferecendo uma solução simples e eficiente para controle de dados da aplicação.
---

## Licença

Este projeto está licenciado sob a licença **MIT**, permitindo sua utilização, modificação e distribuição livremente, desde que os devidos créditos sejam dados ao autor original. Para mais detalhes, consulte o arquivo `LICENSE` no repositório.