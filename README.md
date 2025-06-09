
# My-Books

My-Books é um site onde vou cadastrar todos os livros que estou lendo. Em cada cadastro, haverá uma breve descrição do livro e algumas opiniões pessoais sobre aspectos abordados na leitura. Também haverá uma seção de favoritos, onde serão exibidos todos os livros que marquei como favoritos.



## 	💠, 🌀React

Para acelerar o desenvolvimento do projeto, utilizei React, pois é uma ferramenta poderosa quando se trata de lidar com Front-End.

Em relação à reutilização de código com componentes independentes, o React facilita a organização e manutenção da aplicação, contribuindo para a clareza do código e facilitando futuras manutenções.

Além disso, o React não manipula o DOM real diretamente — ele utiliza um DOM virtual para minimizar mudanças desnecessárias, o que resulta em interfaces mais rápidas e eficientes.

O React também funciona muito bem com outras tecnologias, como CSS, GraphQL, Firebase, APIs REST, entre outras. Pode ser utilizado em conjunto com TypeScript, Redux e Next.js para escalar aplicações de grande porte. 
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

Para fazer o deploy deste projeto, utilizei o Render, pois é uma opção bem acessível, incluindo a possibilidade de conectar com repositórios Git, o que facilita bastante a hospedagem dos projetos, principalmente das APIs.

Ele é ideal para projetos pequenos e oferece suporte a Web Services, bancos de dados, além de disponibilizar um domínio com HTTPS incluso.

O Render também realiza reinicializações automáticas conforme a demanda e possui suporte nativo a várias linguagens, como Node.js, Python, Go, Ruby, entre outras.

Com uma API em Node.js utilizando MongoDB Atlas, o Render permite fazer o deploy com facilidade, sem a necessidade de configurar servidores, NGINX ou containers manualmente.



## 🙌 Agradecimentos

Este projeto foi desenvolvido com foco em aprendizado e prática de construção de APIs modernas com tecnologias como TypeScript, Prisma e MongoDB.
Agradeço a todas as comunidades e documentações oficiais que auxiliaram no processo!
## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.
## 🤝Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
