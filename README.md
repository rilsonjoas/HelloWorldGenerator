# 🌐 HelloWorld Generator

O **HelloWorld Generator** é uma ferramenta web interativa e elegante que fornece o código "Hello, World!" para mais de 25 linguagens de programação. Projetado tanto para desenvolvedores experientes quanto para iniciantes na programação, este projeto serve como uma referência rápida e educacional para a sintaxe básica de diversas linguagens.

A aplicação se destaca por sua interface limpa, inspirada em um terminal, e pelo suporte completo à **internacionalização (i18n)**, com a interface traduzida para Inglês, Espanhol e Português.

**🔗 Acesse a aplicação:** https://rilsonjoas.github.io/HelloWorldGenerator/

## ✨ Principais Funcionalidades

-   **Ampla Cobertura de Linguagens:** Gera o código "Hello, World!" para mais de 25 linguagens populares e de nicho, de JavaScript e Python a COBOL e Assembly.
-   **Suporte Multilíngue (i18n):** A interface do usuário pode ser alternada dinamicamente entre Inglês, Espanhol e Português.
-   **Funcionalidade de Cópia Rápida:** Um botão "Copiar Código" permite que o usuário copie facilmente o snippet de código para a área de transferência com um único clique.
-   **Design Moderno e Responsivo:** Uma interface estilizada como um terminal de macOS, totalmente responsiva e agradável de usar em desktops e dispositivos móveis.
-   **Estrutura de Dados Modular:** O código para cada linguagem é armazenado em um arquivo `languages.js` separado, e as traduções em `translations.js`, tornando o projeto fácil de manter e expandir.
-   **Zero Dependências Externas:** Construído com HTML, CSS e JavaScript puros, sem a necessidade de frameworks ou bibliotecas pesadas.

## 🛠️ Tecnologias Utilizadas

| Tecnologia      | Descrição                                                          |
| --------------- | ------------------------------------------------------------------ |
| **HTML5**       | Estruturação semântica da página.                                  |
| **CSS3**        | Estilização avançada com variáveis CSS para um tema consistente e responsivo. |
| **JavaScript (ES6+)** | Lógica da aplicação, manipulação do DOM, e sistema de internacionalização. |
| **Google Fonts**| Fontes `Fira Code` (para o código) e `Inter` (para a UI) para uma excelente legibilidade. |

## 🚀 Como Executar Localmente

Como este projeto é construído apenas com tecnologias front-end, executá-lo é muito simples.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/helloworld-generator.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd helloworld-generator
    ```

3.  **Abra o arquivo `index.html` em seu navegador de preferência.**
    -   Você pode simplesmente dar um clique duplo no arquivo. Para uma melhor experiência de desenvolvimento, use uma extensão como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.

E pronto! A aplicação estará rodando localmente.

## 📁 Estrutura do Projeto

A estrutura de arquivos é limpa e intuitiva:

```
.
├── index.html          # O arquivo principal da aplicação
├── styles.css          # Folha de estilos
├── script.js           # Lógica principal da aplicação
├── languages.js        # Banco de dados com os códigos "Hello, World!"
└── translations.js     # Objeto com as traduções da interface
```

## 💡 Lógica Principal

O coração da funcionalidade está no arquivo `script.js`. A lógica opera da seguinte forma:

1.  **Carregamento Dinâmico:** Ao carregar a página, o script popula dinamicamente o menu `<select>` com as linguagens disponíveis no arquivo `languages.js`.
2.  **Seleção de Linguagem:** Quando o usuário escolhe uma linguagem, um evento `change` é disparado. A função `displayCode` busca o objeto correspondente à linguagem selecionada e atualiza o conteúdo do bloco de código.
3.  **Funcionalidade de Cópia:** O botão "Copiar Código" utiliza a API `navigator.clipboard` para copiar o conteúdo do bloco de código para a área de transferência do usuário, fornecendo feedback visual ("Copiado!") por um breve período.
4.  **Internacionalização (i18n):**
    -   O arquivo `translations.js` contém um objeto com as traduções para cada idioma suportado.
    -   A função `setLanguage` percorre todos os elementos com o atributo `data-i18n-key`, buscando a chave correspondente no objeto de tradução e atualizando o `textContent` do elemento.
    -   Os botões de idioma no topo da página acionam essa função, permitindo a troca instantânea do idioma da interface.

## 🌟 Contribuições

Contribuições são muito bem-vindas! Se você tem uma sugestão para adicionar uma nova linguagem de programação, melhorar uma tradução ou otimizar o código, sinta-se à vontade para:

1.  Fazer um **Fork** deste repositório.
2.  Criar uma nova **Branch** (`git checkout -b feature/adicionar-linguagem-nova`).
3.  Fazer suas alterações (geralmente adicionando uma nova entrada em `languages.js`).
4.  Enviar um **Pull Request** com uma descrição clara do que foi adicionado ou alterado.

---

Desenvolvido por [Rilson Joás](https://github.com/rilsonjoas)
