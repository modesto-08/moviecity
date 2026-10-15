# TODO — MovieCity

## 1. Página e componentes React
- [x] Criar a landing page do serviço de streaming MovieCity com React 19, Vite 7, JavaScript (ESM), CSS puro e ESLint, sem bibliotecas de UI.
- [x] Separar a página em `Home.jsx`, `Header.jsx` e `Main.jsx`; ligar o container em `App.jsx`, importar o CSS global e manter `main.jsx` como ponto de entrada.
- [x] Implementar cabeçalho com logo MovieCity, links Filmes, Categoria, Sobre e Contato, botão Login e menu hambúrguer para telas pequenas.
- [x] Renderizar os links a partir de lista com `.map()` e fechar o menu ao ativar um link.
- [x] Implementar título “Seus Filmes”, o texto “Aqui, você pode escolher o filme que deseja assistir. Caso queira escolher mais, clique no botão.”, o botão “Mais” e a grade com seis imagens.

## 2. Cartazes
- [x] Integrar os arquivos recebidos em `src/assets/`: `afterlife.jpg`, `transformers.jpg`, `mowgli.jpg`, `shift.png`, `squidgame.webp` e `harrypotter.jpg`, correspondentes a Afterlife, Transformers, Mowgli, Shift, Round 6 e Harry Potter.
- [x] Corrigir o arquivo recebido como `shift.png`, que tinha conteúdo JPEG, salvando-o como PNG válido sem alterar a proporção.
- [x] Adicionar texto alternativo para cada pôster e manter as imagens proporcionais nos cards.

## 3. Visual e responsividade
- [x] Reproduzir a referência enviada: fundo preto, tipografia branca, CTA azul, conteúdo principal com chamada à esquerda e grade de pôsteres horizontais à direita.
- [x] Em telas pequenas, empilhar a chamada e o catálogo, mostrar duas colunas de cards e usar menu hambúrguer funcional.
- [x] Implementar breakpoints em `max-width: 1100px`, `900px`, `600px` e `380px`.
- [x] Conferir visualmente as larguras 1440px, 1024px, 768px, 600px e 375px e verificar ausência de rolagem horizontal.

## 4. Execução
- [x] Disponibilizar `npm run dev`, `npm run preview`, `npm run lint` e `npm run build`.
- [x] Validar lint e build e documentar os comandos no `README.md`.
