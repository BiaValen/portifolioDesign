# Portfólio

Portfólio de design, em português (`/`) e inglês (`/en/`).
Feito com [Astro](https://astro.build): gera páginas estáticas, rápidas e fáceis de hospedar.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:4321.

## Seus dados

Nome, frase de apresentação, e-mail e LinkedIn ficam em **`src/data/site.ts`**.
Troque os valores provisórios ("Seu Nome", `seuemail@exemplo.com` e o link do LinkedIn) e o site inteiro se atualiza.

## Onde editar cada coisa

| O que | Arquivo |
|---|---|
| Nome, e-mail, LinkedIn | `src/data/site.ts` |
| Projetos do portfólio | `src/data/projects.ts` |
| Textos (PT e EN) | `src/i18n/strings.ts` |
| Cores e tipografia | `src/styles/global.css` |

### Portfólio

Cada projeto é um item em `src/data/projects.ts`. Um projeto pode ter:

- **Carrosséis do Canva** (`carousels`): coloque os .zip numa pasta e rode
  `npm run portfolio -- "C:\caminho\da\pasta"`. Os slides são convertidos para WebP
  e os de legenda (só texto) saem automaticamente. Para tirar outros, use `drop`; para mudar a ordem, `order`.
- **Site ou app** (`site`): vídeo de navegação e páginas que dá para rolar no case.
  Use `device: 'mobile'` para mostrar numa moldura de celular.
- **Identidade visual** (`identity`): imagens soltas em `public/portfolio/`.
- **Jogo** (`game`): trailer, link para jogar, prêmio, texto sobre o jogo, equipe e imagens de divulgação.
- **Projeto pessoal** (`own: true`): mostra a etiqueta "Projeto pessoal" no lugar de cliente.

## Publicar no GitHub Pages

1. Crie um repositório **público** no GitHub e envie este projeto para a branch `main`.
2. Em **Settings → Pages → Build and deployment → Source**, escolha **GitHub Actions**.
3. A cada `git push` na `main`, o site é publicado em `https://<seu-usuario>.github.io/<nome-do-repositorio>/`.

O workflow (`.github/workflows/deploy.yml`) descobre o usuário e o nome do repositório sozinho.

**Domínio próprio:** no workflow, troque `SITE_URL` pelo domínio e `BASE_PATH` por `/`,
e configure o domínio em Settings → Pages → Custom domain.
