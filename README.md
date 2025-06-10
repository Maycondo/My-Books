
# My-Books

My-Books é um site onde você pode cadastrar os livros que está lendo, adicionando uma breve descrição e opiniões pessoais sobre a leitura. O projeto também conta com uma seção de favoritos, onde são exibidos os livros marcados como preferidos.



## 	💠, 🌀React

🔠 Por que React?

Utilizei o React para acelerar o desenvolvimento, já que é uma biblioteca robusta para construção de interfaces modernas e reativas.

Permite a reutilização de componentes independentes.

Organiza melhor o código, facilitando a manutenção.

Utiliza o Virtual DOM para tornar as interações mais rápidas e eficientes.

Integra facilmente com diversas tecnologias como TypeScript, Redux, GraphQL, APIs REST, Firebase, entre outras. 
 ## 🚀 Tecnologias utilizadas

- __Axios__ — Cliente HTTP usado para fazer requisições à API de forma simples e eficiente.

- __Framer-motion__ Biblioteca de animações para React que facilita a criação de transições suaves e interativas.

- __Next.js__ — Framework React para construção de aplicações web modernas, com suporte a SSR (Server Side Rendering) e rotas dinâmicas.

- __React-icons__ — Conjunto de ícones populares integrados ao React, facilitando a adição de ícones em interfaces.

- __tailwindcss__ — Tailwind CSS — Framework utilitário para estilização rápida e responsiva da interface, baseado em classes CSS.

- __typescript__ — Superset do JavaScript que adiciona tipagem estática, aumentando a segurança e previsibilidade do código durante o desenvolvimento.

### 📁 Estrutura do Projeto

```bash
src/
├── app/
│   ├── page.tsx
│   └── password.ts
├── components/
│   ├── ButtonAdd/
│   │   ├── ButtonAddBooks.tsx
│   │   └── style.css
│   ├── CardBook/
│   │   ├── Style_mobile/
│   │   │   └── Style_1.css
│   │   ├── CardBook.tsx
│   │   ├── style_1.css
│   │   ├── style_2.css
│   │   └── Toolbar.tsx
│   ├── CardPassWord/
│   │   ├── cardPassWord.css
│   │   └── CardPassWord.tsx
│   ├── ContainerAddBook/
│   │   ├── Style/
│   │   │   ├── style_1.css
│   │   │   └── style_2.css
│   │   └── ConteinerAddBook.tsx
│   ├── Context/
│   │   └── BookContext.tsx
│   ├── Loader/
│   │   ├── Loader.tsx
│   │   └── style.css
│   ├── MessagensBooks/
│   │   ├── ErroMessagemBook.tsx
│   │   ├── style.css
│   │   └── SuccessMessagem.tsx
│   ├── PanelBooks/
│   │   ├── FavoritesBooks.jsx
│   │   ├── PanelBooks.tsx
│   │   └── style.css
│   └── Panelsuperior/
├── Image/
│   └── .clear (possivelmente uma pasta vazia ou arquivo temporário)
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
├── tailwind.config.ts
└── tsconfig.json

```

### 📦 Metados HTTP que utilizei para conecta com API-books

- **GET** /books – Lista todos os livros

- **GET** /books/:id – Busca um livro por ID

- **POST** /books – Adiciona um novo livro

- **PUT** /books/:id – Atualiza os dados de um livro

- **DELETE** /books/:id – Remove um livro do banco de dados


## Deploy

Para fazer o deploy no GitHub  e utilizei o vercel para hospedar um meu projeto, que e uma exelente opção para hospedar projetos Font-Ent traz diverços beneficios especialmente com quem trabalhar com varios tecnologia com React , Next.js , Vue.

Quando o projeto e hospedado no vircel ele fornece Dominio  ``` nomedoprojeto.vercel```bash  app incluído, alem disso tem HTTPs habilitado automaticamente com certificado SSL.





## 🙌 Agradecimentos

Este projeto foi desenvolvido com foco no aprendizado de TypeScript. A tipagem estática ajuda a evitar erros durante o desenvolvimento e oferece uma compreensão mais clara da estrutura do código. Com isso, é possível fazer alterações maiores com segurança e previsibilidade.

## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.
## 🤝Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. Vamos construir juntos! 💡

