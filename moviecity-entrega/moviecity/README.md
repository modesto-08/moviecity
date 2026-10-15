# MovieCity — Landing Page

Landing page responsiva de filmes feita com React 19, Vite 7, JavaScript (ESM), CSS puro e ESLint. O visual segue a referência enviada: fundo preto, texto branco, botões azuis e pôsteres em grade.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm 10.9.2 ou compatível

## Instalar e executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para usar a porta 5173 citada no roteiro, execute `npm run dev -- --port 5173` e abra `http://localhost:5173`.

## Verificar

```bash
npm run lint
npm run build
```

O build de produção é gerado em `dist/`. Para servi-lo localmente, pare o servidor de desenvolvimento com `Ctrl+C` e rode:

```bash
npm run preview
```

## Imagens

Os seis pôsteres recebidos estão em `src/assets/`: `afterlife.jpg`, `transformers.jpg`, `mowgli.jpg`, `shift.png`, `squidgame.webp` e `harrypotter.jpg`.

## Testar responsividade

No navegador, abra as ferramentas de desenvolvedor (F12), ative a barra de dispositivos (Ctrl+Shift+M) e confira 1440px, 1024px, 768px, 600px e 375px. Confirme que o menu móvel abre/fecha e que não há rolagem horizontal.
