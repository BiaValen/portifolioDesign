// Todos os textos do site, em português e inglês.
// Nome, e-mail e LinkedIn ficam em src/data/site.ts.

import { withBase } from '../lib/url';

export type Lang = 'pt' | 'en';

export const paths = {
  pt: { home: withBase('/') },
  en: { home: withBase('/en/') },
} as const;

const pt = {
  htmlLang: 'pt-BR',
  meta: {
    title: 'Portfólio de design',
    description: 'Portfólio de design: identidade visual, interfaces, sites, aplicativos e conteúdo para redes sociais.',
  },
  skip: 'Ir para o conteúdo',
  nav: {
    work: 'Portfólio',
    contact: 'Contato',
    menu: 'Navegação',
    otherLang: 'English',
    otherLangShort: 'EN',
  },
  hero: {
    lead: 'Projetos de identidade visual, interfaces, sites, aplicativos, jogos e conteúdo para redes sociais.',
    primary: 'Ver portfólio',
    secondary: 'Entrar em contato',
  },
  work: {
    title: 'Portfólio',
    intro: 'Uma seleção de projetos de identidade visual, interfaces, conteúdo, desenvolvimento, jogos e ilustração.',
    filterLabel: 'Filtrar projetos por tipo',
    all: 'Todos',
    categories: {
      identidade: 'Identidade visual',
      interfaces: 'UI/UX e sites',
      social: 'Redes sociais',
      dev: 'Desenvolvimento',
      jogos: 'Jogos',
      ilustracao: 'Ilustração',
    },
    empty: 'Ainda não há projetos nesta categoria. Veja os outros tipos acima.',
    open: 'Abrir projeto',
    close: 'Fechar projeto',
    site: 'Site',
    visit: 'Visitar o site',
    pages: 'Páginas do site',
    own: 'Projeto pessoal',
    app: 'Aplicativo',
    mobile: 'Versão mobile',
    video: 'Vídeo navegando pelo site',
    identity: 'Identidade visual',
    illustrations: 'Ilustrações vetoriais',
    social: 'Redes sociais',
    carousels: (n: number) => (n === 1 ? '1 carrossel' : `${n} carrosséis`),
    pickCarousel: 'Escolha um carrossel',
    prev: 'Slide anterior',
    next: 'Próximo slide',
    slideOf: (i: number, n: number) => `${i} de ${n}`,
    game: 'Jogo',
    play: 'Jogar grátis no itch.io',
    teaser: 'Ver o teaser no YouTube',
    trailer: 'Trailer do jogo',
    credits: 'Equipe',
    promo: 'Divulgação',
  },
  contact: {
    title: 'Vamos conversar',
    intro: 'Para propostas, parcerias ou só para trocar uma ideia sobre um projeto.',
    email: 'E-mail',
    linkedin: 'LinkedIn',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    top: 'Voltar ao topo',
  },
  notFound: {
    title: 'Página não encontrada',
    body: 'O endereço pode ter mudado ou não existe mais.',
    back: 'Voltar ao início',
  },
};

const en: typeof pt = {
  htmlLang: 'en',
  meta: {
    title: 'Design portfolio',
    description: 'Design portfolio: brand identity, interfaces, websites, apps and social media content.',
  },
  skip: 'Skip to content',
  nav: {
    work: 'Work',
    contact: 'Contact',
    menu: 'Navigation',
    otherLang: 'Português',
    otherLangShort: 'PT',
  },
  hero: {
    lead: 'Brand identity, interfaces, websites, apps, games and social media content.',
    primary: 'See my work',
    secondary: 'Get in touch',
  },
  work: {
    title: 'Work',
    intro: 'A selection of brand identity, interface, content, development, game and illustration projects.',
    filterLabel: 'Filter projects by type',
    all: 'All',
    categories: {
      identidade: 'Brand identity',
      interfaces: 'UI/UX and websites',
      social: 'Social media',
      dev: 'Development',
      jogos: 'Games',
      ilustracao: 'Illustration',
    },
    empty: 'No projects in this category yet. Try one of the other types above.',
    open: 'Open project',
    close: 'Close project',
    site: 'Website',
    visit: 'Visit the website',
    pages: 'Website pages',
    own: 'Personal project',
    app: 'App',
    mobile: 'Mobile version',
    video: 'Video browsing the website',
    identity: 'Brand identity',
    illustrations: 'Vector illustrations',
    social: 'Social media',
    carousels: (n: number) => (n === 1 ? '1 carousel' : `${n} carousels`),
    pickCarousel: 'Choose a carousel',
    prev: 'Previous slide',
    next: 'Next slide',
    slideOf: (i: number, n: number) => `${i} of ${n}`,
    game: 'Game',
    play: 'Play free on itch.io',
    teaser: 'Watch the teaser on YouTube',
    trailer: 'Game trailer',
    credits: 'Team',
    promo: 'Promo art',
  },
  contact: {
    title: 'Let’s talk',
    intro: 'For proposals, collaborations or just to talk through a project.',
    email: 'Email',
    linkedin: 'LinkedIn',
  },
  footer: {
    rights: 'All rights reserved.',
    top: 'Back to top',
  },
  notFound: {
    title: 'Page not found',
    body: 'The address may have changed or no longer exists.',
    back: 'Back to home',
  },
};

export const strings = { pt, en };
export const t = (lang: Lang) => strings[lang];
