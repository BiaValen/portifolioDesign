// Portfólio: um item por cliente.
//
// Cada cliente pode ter um site, uma identidade visual e carrosséis para redes sociais.
// Carrosséis e galerias vêm da pasta de downloads do Canva e são convertidos com:
//   npm run portfolio -- "C:\caminho\da\pasta\do\canva"
// Em `src`, use o começo do nome do arquivo (ex.: 'Alba 01' para "Alba 01 - 30-01-2026.zip").
// Slides de legenda (só texto, no início ou no fim) são removidos automaticamente.
// Para tirar outros slides, informe as posições em `drop` (a contagem começa em 1, na ordem do Canva).
// Para mudar a ordem, liste as posições em `order` (ex.: [2, 1, 3]); as que não aparecerem vão para o fim.
// Apagar um arquivo de public/portfolio/sets/ também funciona: o site ignora slides que não existem.
//
// size: tamanho do card na grade. 'wide' (largo), 'tall' (alto) ou 'normal'.
// cover: imagem do card. Para usar um slide convertido: '/portfolio/sets/<id>/<n>.webp'.

export type Category = 'identidade' | 'interfaces' | 'social' | 'dev' | 'jogos' | 'ilustracao' | 'itens';

export type SourceRef = { src: string; drop?: number[]; order?: number[] };

export type Project = {
  id: string;
  // Nome do cliente ou, em projeto próprio, o nome do produto.
  client: string;
  // Projeto pessoal, sem cliente.
  own?: boolean;
  // Feito numa empresa júnior: mostra a etiqueta "Empresa júnior".
  junior?: boolean;
  summary: { pt: string; en: string };
  services: Category[];
  year: string;
  size: 'wide' | 'tall' | 'normal';
  cover: string;
  // Mostra slides empilhados atrás da capa (bom para quem tem só redes sociais).
  stack?: SourceRef;
  // Site: link (se estiver no ar), print principal, vídeo de navegação e páginas.
  // Em `pages`, `screen` é o print da tela e `full` a página inteira (que dá para rolar no case).
  site?: {
    url?: string;
    image?: string;
    video?: string;
    poster?: string;
    pages?: { name: { pt: string; en: string }; screen: string; full: string }[];
    // 'mobile' mostra o vídeo e as páginas numa moldura de celular.
    device?: 'desktop' | 'mobile';
  };
  // App mobile mostrado junto com o site, numa moldura de celular.
  // label 'mobile' mostra "Versão mobile" no lugar de "Aplicativo".
  app?: { label?: 'mobile'; pages: { name: { pt: string; en: string }; screen: string; full: string }[] };
  // Imagens soltas (caminho em public/) ou galerias convertidas do Canva.
  identity?: (string | SourceRef)[];
  carousels?: SourceRef[];
  // Ferramentas usadas, mostradas como etiquetas no card (ex.: ['Figma']).
  tools?: string[];
  // Ilustrações vetoriais (caminho em public/).
  illustrations?: string[];
  // Galerias com título próprio (ex.: Camisetas, Boné, Posts).
  gallery?: { title: { pt: string; en: string }; images: string[] }[];
  // Jogo: link para jogar, trailer, prêmio, ficha técnica, equipe e imagens de divulgação.
  game?: {
    url?: string;
    // Link externo para um vídeo (ex.: teaser no YouTube).
    teaser?: string;
    video?: string;
    poster?: string;
    award?: { pt: string; en: string };
    // Ex.: 'Feito em 48 horas, em Godot 4'.
    facts?: { pt: string; en: string };
    // Parágrafos sobre o jogo, mostrados no case.
    about?: { pt: string; en: string }[];
    credits?: { name: string; role?: { pt: string; en: string } }[];
    // Observação abaixo da equipe (ex.: origem de artes e sons de terceiros).
    assetsNote?: { pt: string; en: string };
    images?: string[];
  };
};

export const categories: Category[] = ['identidade', 'interfaces', 'social', 'dev', 'jogos', 'ilustracao', 'itens'];

export const projects: Project[] = [
  {
    id: 'quito',
    client: 'Quito',
    own: true,
    summary: {
      pt: 'Jogo de plataforma num desktop falso: estique, corte e arraste janelas e ícones para ajudar um passarinho em risco de extinção a montar seu ninho.',
      en: 'A platformer set on a fake desktop: stretch, cut and drag windows and icons to help an endangered little bird build its nest.',
    },
    services: ['jogos', 'dev'],
    year: '2026',
    size: 'wide',
    cover: '/portfolio/quito/poster.webp',
    game: {
      url: 'https://calderaro.itch.io/quito',
      video: '/portfolio/quito/trailer.mp4',
      poster: '/portfolio/quito/poster.webp',
      award: { pt: '1º lugar na Gamerex 2026', en: '1st place at Gamerex 2026' },
      facts: { pt: 'Feito em 48 horas, em Godot 4', en: 'Made in 48 hours, in Godot 4' },
      about: [
        {
          pt: 'Quito é um bicudinho-do-brejo-paulista, um passarinho pequeno que está em risco de desaparecer. Ele vive dentro de um computador e precisa juntar gravetos para montar um ninho para a bicudinha.',
          en: 'Quito is a São Paulo marsh antwren, a tiny bird at risk of disappearing. He lives inside a computer and has to gather twigs to build a nest for his mate.',
        },
        {
          pt: 'O jogo se passa num desktop falso. Estique, encolha e corte a janela com o mouse para abrir caminho, e arraste os ícones do desktop para usá-los como plataformas e paredes. Cuidado com as bordas de vidro: bater nelas na disparada custa uma pena.',
          en: 'The game takes place on a fake desktop. Stretch, shrink and cut the window with the mouse to clear a path, and drag desktop icons to use them as platforms and walls. Watch out for the glass edges: hitting them at full speed costs a feather.',
        },
      ],
      credits: [
        { name: 'Letícia Akemi Ikemoto', role: { pt: 'Arte e game design', en: 'Art and game design' } },
        { name: 'Felipe Calderaro', role: { pt: 'Programação e game design', en: 'Programming and game design' } },
        { name: 'Bianca Valenciani', role: { pt: 'Game design, UI/UX e efeitos sonoros (SFX)', en: 'Game design, UI/UX and sound effects (SFX)' } },
      ],
      images: ['/portfolio/quito/divulgacao.webp', '/portfolio/quito/creditos.webp'],
    },
  },
  {
    id: 'fragments-of-eter',
    client: 'Fragments of Eter',
    summary: {
      pt: 'Jogo de ação em pixel art: Bai Hua, a Guardadora do Éter, atravessa os reinos de cinco elementos ao lado do seu gato para enfrentar a força do vácuo.',
      en: 'A pixel art action game: Bai Hua, Keeper of the Ether, crosses the realms of five elements with her cat to face the force of the void.',
    },
    services: ['jogos', 'dev'],
    year: '2026',
    size: 'wide',
    cover: '/portfolio/fragments-of-eter/poster.webp',
    game: {
      url: 'https://calderaro.itch.io/fragments-of-eter',
      teaser: 'https://www.youtube.com/watch?v=gy1Nt0DnJ9I',
      video: '/portfolio/fragments-of-eter/trailer.mp4',
      poster: '/portfolio/fragments-of-eter/poster.webp',
      award: { pt: 'Vencedor da Mostra Cultural de Jogos da Unifesp', en: 'Winner of the Unifesp Cultural Game Showcase' },
      facts: { pt: 'Desenvolvimento de Games, Unifesp', en: 'Game Development, Unifesp (Federal University of São Paulo)' },
      about: [
        {
          pt: 'Há mil anos, uma força nasceu do desequilíbrio. Bai Hua, a escolhida como Guardadora do Éter, é a última esperança, e não está sozinha: Hei Mao, seu gato, é na verdade um guia entre dimensões.',
          en: 'A thousand years ago, a force was born from imbalance. Bai Hua, chosen as Keeper of the Ether, is the last hope, and she is not alone: Hei Mao, her cat, is actually a guide between dimensions.',
        },
        {
          pt: 'Cada fase é o reino de um Éter: madeira, fogo, terra, metal e água. Sobreviva às hordas que fecham o cerco, fique mais forte a cada elemento e enfrente Xuan Zhi no vácuo.',
          en: 'Each stage is the realm of one Ether: wood, fire, earth, metal and water. Survive the hordes closing in, grow stronger with each element and face Xuan Zhi in the void.',
        },
      ],
      credits: [{ name: 'Bianca Valenciani', role: { pt: 'Game design e UI/UX', en: 'Game design and UI/UX' } }, { name: 'Felipe Calderaro', role: { pt: 'Game design e programação', en: 'Game design and programming' } }],
      assetsNote: {
        pt: 'O jogo usa artes e sons gratuitos e comprados de outros artistas, todos listados nos créditos dentro do jogo.',
        en: 'The game uses free and purchased art and sound from other artists, all listed in the in-game credits.',
      },
      images: ['/portfolio/fragments-of-eter/divulgacao.webp', '/portfolio/fragments-of-eter/creditos.webp'],
    },
  },
  {
    id: 'ilustracoes',
    client: 'Ilustrações vetoriais',
    own: true,
    summary: {
      pt: 'Personagens e cenas desenhados no Illustrator, com gradientes, luz e sombra construídos em vetor.',
      en: 'Characters and scenes drawn in Illustrator, with gradients, light and shadow built in vector.',
    },
    services: ['ilustracao'],
    year: '2025–2026',
    size: 'normal',
    tools: ['Illustrator'],
    cover: '/portfolio/ilustracoes/menina.webp',
    illustrations: [
      '/portfolio/ilustracoes/menina.webp',
      '/portfolio/ilustracoes/personagem.webp',
      '/portfolio/ilustracoes/morcego.webp',
      '/portfolio/ilustracoes/psp.webp',
    ],
  },
  {
    id: 'connectcare',
    client: 'ConnectCare',
    summary: {
      pt: 'Site e app para organizar a saúde: lembretes de remédios, agenda de exames e consultas, receitas digitalizadas e notícias.',
      en: 'A website and app to keep health in order: medication reminders, exam and appointment scheduling, scanned prescriptions and news.',
    },
    services: ['interfaces'],
    year: '2025',
    size: 'normal',
    tools: ['Figma'],
    cover: '/portfolio/connectcare/telas/nao-logado.webp',
    site: {
      pages: [
        { name: { pt: 'Início', en: 'Home' }, screen: '/portfolio/connectcare/telas/nao-logado.webp', full: '/portfolio/connectcare/paginas/nao-logado.webp' },
        { name: { pt: 'Painel', en: 'Dashboard' }, screen: '/portfolio/connectcare/telas/logado.webp', full: '/portfolio/connectcare/paginas/logado.webp' },
        { name: { pt: 'Receitas', en: 'Prescriptions' }, screen: '/portfolio/connectcare/telas/receitas.webp', full: '/portfolio/connectcare/paginas/receitas.webp' },
        { name: { pt: 'Conta', en: 'Account' }, screen: '/portfolio/connectcare/telas/conta.webp', full: '/portfolio/connectcare/paginas/conta.webp' },
      ],
    },
    app: {
      pages: [
        { name: { pt: 'Abertura', en: 'Welcome' }, screen: '/portfolio/connectcare/app/inicial.webp', full: '/portfolio/connectcare/app/inicial.webp' },
        { name: { pt: 'Login', en: 'Login' }, screen: '/portfolio/connectcare/app/login.webp', full: '/portfolio/connectcare/app/login.webp' },
        { name: { pt: 'Início', en: 'Home' }, screen: '/portfolio/connectcare/app/home.webp', full: '/portfolio/connectcare/app/home.webp' },
        { name: { pt: 'Novo lembrete', en: 'New reminder' }, screen: '/portfolio/connectcare/app/lembrete.webp', full: '/portfolio/connectcare/app/lembrete.webp' },
        { name: { pt: 'Exames', en: 'Exams' }, screen: '/portfolio/connectcare/app/exames.webp', full: '/portfolio/connectcare/app/exames.webp' },
        { name: { pt: 'Consulta', en: 'Appointment' }, screen: '/portfolio/connectcare/app/consulta.webp', full: '/portfolio/connectcare/app/consulta.webp' },
        { name: { pt: 'Receitas', en: 'Prescriptions' }, screen: '/portfolio/connectcare/app/receitas.webp', full: '/portfolio/connectcare/app/receitas.webp' },
        { name: { pt: 'Digitalizar', en: 'Scan' }, screen: '/portfolio/connectcare/app/digitalizar.webp', full: '/portfolio/connectcare/app/digitalizar.webp' },
      ],
    },
  },
  {
    id: 'dona-rosa',
    client: 'Dona Rosa',
    junior: true,
    summary: {
      pt: 'Site para pizzaria artesanal: cardápio, cursos e eventos, reserva de mesa e uma identidade com ilustrações feitas à mão, no desktop e no celular.',
      en: 'A website for an artisanal pizzeria: menu, classes and events, table booking and a hand-drawn illustrated identity, on desktop and mobile.',
    },
    services: ['interfaces'],
    year: '2025',
    size: 'normal',
    tools: ['Figma'],
    cover: '/portfolio/dona-rosa/telas/home.webp',
    site: {
      pages: [
        { name: { pt: 'Início', en: 'Home' }, screen: '/portfolio/dona-rosa/telas/home.webp', full: '/portfolio/dona-rosa/paginas/home.webp' },
        { name: { pt: 'Cardápio', en: 'Menu' }, screen: '/portfolio/dona-rosa/telas/cardapio.webp', full: '/portfolio/dona-rosa/paginas/cardapio.webp' },
        { name: { pt: 'Quem somos', en: 'About' }, screen: '/portfolio/dona-rosa/telas/quem-somos.webp', full: '/portfolio/dona-rosa/paginas/quem-somos.webp' },
        { name: { pt: 'Cursos e eventos', en: 'Classes and events' }, screen: '/portfolio/dona-rosa/telas/cursos-eventos.webp', full: '/portfolio/dona-rosa/paginas/cursos-eventos.webp' },
        { name: { pt: 'Saúde e sustentabilidade', en: 'Health and sustainability' }, screen: '/portfolio/dona-rosa/telas/saude.webp', full: '/portfolio/dona-rosa/paginas/saude.webp' },
        { name: { pt: 'Fotos', en: 'Photos' }, screen: '/portfolio/dona-rosa/telas/fotos.webp', full: '/portfolio/dona-rosa/paginas/fotos.webp' },
        { name: { pt: 'Contato', en: 'Contact' }, screen: '/portfolio/dona-rosa/telas/contato.webp', full: '/portfolio/dona-rosa/paginas/contato.webp' },
      ],
    },
    app: {
      label: 'mobile',
      pages: [
        { name: { pt: 'Início', en: 'Home' }, screen: '/portfolio/dona-rosa/app/home.webp', full: '/portfolio/dona-rosa/app-paginas/home.webp' },
        { name: { pt: 'Menu', en: 'Menu' }, screen: '/portfolio/dona-rosa/app/menu.webp', full: '/portfolio/dona-rosa/app-paginas/menu.webp' },
        { name: { pt: 'Quem somos', en: 'About' }, screen: '/portfolio/dona-rosa/app/quem-somos.webp', full: '/portfolio/dona-rosa/app-paginas/quem-somos.webp' },
        { name: { pt: 'Cursos e eventos', en: 'Classes and events' }, screen: '/portfolio/dona-rosa/app/cursos-eventos.webp', full: '/portfolio/dona-rosa/app-paginas/cursos-eventos.webp' },
        { name: { pt: 'Saúde', en: 'Health' }, screen: '/portfolio/dona-rosa/app/saude.webp', full: '/portfolio/dona-rosa/app-paginas/saude.webp' },
        { name: { pt: 'Fotos', en: 'Photos' }, screen: '/portfolio/dona-rosa/app/fotos.webp', full: '/portfolio/dona-rosa/app-paginas/fotos.webp' },
        { name: { pt: 'Contato', en: 'Contact' }, screen: '/portfolio/dona-rosa/app/contato.webp', full: '/portfolio/dona-rosa/app-paginas/contato.webp' },
      ],
    },
  },
  {
    id: 'eagle-alliance',
    client: 'Eagle Alliance',
    junior: true,
    summary: {
      pt: 'Site institucional para empresa de segurança privada: serviços, depoimentos, vagas e contato direto por e-mail ou WhatsApp.',
      en: 'A company website for a private security firm: services, testimonials, careers and direct contact by email or WhatsApp.',
    },
    services: ['interfaces'],
    year: '2024',
    size: 'normal',
    tools: ['Figma'],
    cover: '/portfolio/eagle-alliance/telas/home.webp',
    site: {
      pages: [
        { name: { pt: 'Início', en: 'Home' }, screen: '/portfolio/eagle-alliance/telas/home.webp', full: '/portfolio/eagle-alliance/paginas/home.webp' },
        { name: { pt: 'Serviços', en: 'Services' }, screen: '/portfolio/eagle-alliance/telas/servicos.webp', full: '/portfolio/eagle-alliance/paginas/servicos.webp' },
        { name: { pt: 'Quem somos', en: 'About' }, screen: '/portfolio/eagle-alliance/telas/quem-somos.webp', full: '/portfolio/eagle-alliance/paginas/quem-somos.webp' },
        { name: { pt: 'Trabalhe conosco', en: 'Careers' }, screen: '/portfolio/eagle-alliance/telas/trabalhe-conosco.webp', full: '/portfolio/eagle-alliance/paginas/trabalhe-conosco.webp' },
        { name: { pt: 'Contato', en: 'Contact' }, screen: '/portfolio/eagle-alliance/telas/contato.webp', full: '/portfolio/eagle-alliance/paginas/contato.webp' },
        { name: { pt: 'Componentes', en: 'Components' }, screen: '/portfolio/eagle-alliance/telas/componentes.webp', full: '/portfolio/eagle-alliance/paginas/componentes.webp' },
      ],
    },
  },
  {
    id: 'fejesp',
    client: 'FEJESP',
    junior: true,
    summary: {
      pt: 'Área de eventos do site da federação das empresas juniores de São Paulo: agenda, páginas do Vórtex, do EPEJ e do Prêmio FEJESP, com compra de ingressos.',
      en: 'The events section of the São Paulo junior enterprise federation website: calendar and pages for Vórtex, EPEJ and the FEJESP Award, with ticket sales.',
    },
    services: ['interfaces'],
    year: '2024',
    size: 'normal',
    tools: ['Figma'],
    cover: '/portfolio/fejesp/telas/vortex.webp',
    site: {
      pages: [
        { name: { pt: 'Eventos', en: 'Events' }, screen: '/portfolio/fejesp/telas/eventos.webp', full: '/portfolio/fejesp/paginas/eventos.webp' },
        { name: { pt: 'Vórtex', en: 'Vórtex' }, screen: '/portfolio/fejesp/telas/vortex.webp', full: '/portfolio/fejesp/paginas/vortex.webp' },
        { name: { pt: 'EPEJ', en: 'EPEJ' }, screen: '/portfolio/fejesp/telas/epej.webp', full: '/portfolio/fejesp/paginas/epej.webp' },
        { name: { pt: 'Prêmio FEJESP', en: 'FEJESP Award' }, screen: '/portfolio/fejesp/telas/premio.webp', full: '/portfolio/fejesp/paginas/premio.webp' },
      ],
    },
  },
  {
    id: 'scitec-itens',
    client: 'SciTec Jr: itens',
    junior: true,
    summary: {
      pt: 'Camisetas, boné, adesivos e cartões de visita para a SciTec Jr, com o mascote e as cores da empresa júnior.',
      en: 'T-shirts, a cap, stickers and business cards for SciTec Jr, featuring the junior enterprise’s mascot and colors.',
    },
    services: ['itens'],
    year: '2025',
    size: 'normal',
    cover: '/portfolio/scitec/itens/camiseta-mockup-2.webp',
    gallery: [
      {
        title: { pt: 'Camisetas', en: 'T-shirts' },
        images: [
          '/portfolio/scitec/itens/camiseta-mockup-1.webp',
          '/portfolio/scitec/itens/camiseta-mockup-2.webp',
          '/portfolio/scitec/itens/camiseta-mockup-3.webp',
          ...[1, 2, 3, 4].map((n) => `/portfolio/scitec/itens/camiseta-01-${n}.webp`),
          ...[1, 2, 3, 4, 5].map((n) => `/portfolio/scitec/itens/camiseta-02-${n}.webp`),
        ],
      },
      { title: { pt: 'Boné', en: 'Cap' }, images: ['/portfolio/scitec/itens/bone-1.webp', '/portfolio/scitec/itens/bone-2.webp'] },
      { title: { pt: 'Adesivos', en: 'Stickers' }, images: ['/portfolio/scitec/itens/adesivos.webp'] },
      {
        title: { pt: 'Cartão de visita', en: 'Business card' },
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `/portfolio/scitec/itens/cartao-${n}.webp`),
      },
    ],
  },
  {
    id: 'scitec-jr',
    client: 'SciTec Jr',
    junior: true,
    summary: {
      pt: 'Carrosséis, posts, stories e flyer para a SciTec Jr, empresa júnior de ciência e tecnologia da Unifesp: dicas, datas comemorativas e os núcleos da empresa.',
      en: 'Carousels, posts, stories and a flyer for SciTec Jr, the science and technology junior enterprise at Unifesp: tips, special dates and the company’s teams.',
    },
    services: ['social'],
    year: '2024–2025',
    size: 'normal',
    cover: '/portfolio/scitec/posts/nucleos.webp',
    stack: { src: 'SciTec Dev Web' },
    carousels: [
      { src: 'SciTec Conciliar' },
      { src: 'SciTec Dados' },
      { src: 'SciTec Dev Web' },
      { src: 'SciTec Biomedica' },
      { src: 'SciTec IA' },
      { src: 'SciTec Apps' },
      { src: 'SciTec Volta as aulas' },
      { src: 'SciTec Professor' },
    ],
    gallery: [
      {
        title: { pt: 'Posts e stories', en: 'Posts and stories' },
        images: ['nucleos', 'mulheres', 'pais', 'ano-novo', 'ano-novo-2'].map((n) => `/portfolio/scitec/posts/${n}.webp`),
      },
      { title: { pt: 'Flyer', en: 'Flyer' }, images: ['/portfolio/scitec/posts/flyer.webp'] },
    ],
  },
  {
    id: 'paes-de-sal',
    client: 'Pães de Sal',
    summary: {
      pt: 'Site com catálogo e gerenciamento de produtos, e conteúdo para o Instagram que conta a história da fermentação natural.',
      en: 'A website with a product catalog and management, plus Instagram content that tells the story of natural fermentation.',
    },
    services: ['interfaces', 'dev', 'social'],
    year: '2026',
    size: 'wide',
    tools: ['Figma'],
    cover: '/portfolio/paes-de-sal.png',
    site: { url: 'https://paesdesal.com/', image: '/portfolio/paes-de-sal.png' },
    carousels: [{ src: 'Paes de sal 02' }, { src: 'Paes de sal 07' }, { src: 'Paes de sal 05' }, { src: 'Paes de sal 06' }, { src: 'Paes de sal 11' }],
  },
  {
    id: 'alba-gelati',
    client: 'Alba Gelati',
    summary: {
      pt: 'Conteúdo para o Instagram, da contagem regressiva para a inauguração aos eventos, com o jeito divertido da marca.',
      en: 'Instagram content, from the countdown to the grand opening to events, in the brand’s playful voice.',
    },
    services: ['social'],
    year: '2026',
    size: 'tall',
    cover: '/portfolio/sets/alba-08/1.webp',
    stack: { src: 'Alba 09', drop: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
    carousels: [{ src: 'Alba 08' }, { src: 'Alba 09', drop: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] }, { src: 'Alba 05' }, { src: 'Alba 01' }, { src: 'Alba 06' }, { src: 'Alba 02' }],
  },
  {
    id: 'dra-caroline-tomas',
    client: 'Dra. Caroline Tomas',
    summary: {
      pt: 'Site institucional e conteúdo para o Instagram sobre saúde digestiva, com fotografia editorial.',
      en: 'A company website and Instagram content on digestive health, with editorial photography.',
    },
    services: ['interfaces', 'dev', 'social'],
    year: '2025–2026',
    size: 'wide',
    tools: ['Figma'],
    cover: '/portfolio/dracarolinegastro.png',
    site: { url: 'https://www.dracarolinegastro.com.br/', image: '/portfolio/dracarolinegastro.png' },
    carousels: [{ src: 'Carol 06' }, { src: 'Carol 09' }, { src: 'Carol 12' }, { src: 'Carol 04' }, { src: 'Carol 05' }, { src: 'Carol 14' }],
  },
  {
    id: 'dra-michaela',
    client: 'Dra. Michaela',
    summary: {
      pt: 'Identidade visual completa e conteúdo educativo para o Instagram, com a mesma linguagem em cada publicação.',
      en: 'A complete brand identity and educational Instagram content, with the same visual language in every post.',
    },
    services: ['identidade', 'social'],
    year: '2024–2026',
    size: 'normal',
    cover: '/portfolio/ID-Michaela.png',
    identity: ['/portfolio/ID-Michaela.png'],
    carousels: [{ src: 'Micha 15' }, { src: 'Micha 11' }, { src: 'Micha 12' }, { src: 'Micha 02' }, { src: 'Micha 04' }, { src: 'Micha 16', drop: [9] }],
  },
  {
    id: 'papel-laranja',
    client: 'Papel Laranja',
    summary: {
      pt: 'Identidade visual e loja virtual para papelaria personalizada, com catálogo, personalização de produtos e carrinho.',
      en: 'Brand identity and an online store for a custom stationery shop, with a catalog, product customization and a cart.',
    },
    services: ['identidade', 'interfaces', 'dev'],
    year: '2025',
    size: 'normal',
    cover: '/portfolio/ID-Papel-Laranja.png',
    site: {
      video: '/portfolio/papel-laranja/navegacao.mp4',
      poster: '/portfolio/papel-laranja/poster.webp',
      pages: [
        { name: { pt: 'Início', en: 'Home' }, screen: '/portfolio/papel-laranja/telas/01-home.webp', full: '/portfolio/papel-laranja/paginas/01-home.webp' },
        { name: { pt: 'Catálogo', en: 'Catalog' }, screen: '/portfolio/papel-laranja/telas/02-catalogo.webp', full: '/portfolio/papel-laranja/paginas/02-catalogo.webp' },
        { name: { pt: 'Produto', en: 'Product' }, screen: '/portfolio/papel-laranja/telas/03-produto.webp', full: '/portfolio/papel-laranja/paginas/03-produto.webp' },
        { name: { pt: 'Personalize', en: 'Customize' }, screen: '/portfolio/papel-laranja/telas/04-personalize.webp', full: '/portfolio/papel-laranja/paginas/04-personalize.webp' },
        { name: { pt: 'Carrinho', en: 'Cart' }, screen: '/portfolio/papel-laranja/telas/05-carrinho.webp', full: '/portfolio/papel-laranja/telas/05-carrinho.webp' },
        { name: { pt: 'Cadastro', en: 'Sign-up' }, screen: '/portfolio/papel-laranja/telas/06-cadastro.webp', full: '/portfolio/papel-laranja/paginas/06-cadastro.webp' },
      ],
    },
    identity: ['/portfolio/ID-Papel-Laranja.png', { src: 'Banner site' }],
  },
  {
    id: 'angel-valenciani',
    client: 'Angel Valenciani',
    summary: {
      pt: 'Carrosséis que valorizam cada detalhe dos topos de bolo feitos à mão, do ateliê à festa.',
      en: 'Carousels that highlight every detail of handmade cake toppers, from the studio to the party.',
    },
    services: ['social'],
    year: '2025–2026',
    size: 'normal',
    cover: '/portfolio/sets/angel-02/1.webp',
    stack: { src: 'Angel 01' },
    carousels: [{ src: 'Angel 02' }, { src: 'Angel 01' }, { src: 'Angel 03' }, { src: 'Angel 06' }],
  },
  {
    id: 'gastos',
    client: 'Gastos',
    own: true,
    summary: {
      pt: 'Aplicação web de finanças pessoais: orçamento por potes, importação de extratos, caronas, investimentos e histórico num só painel.',
      en: 'A personal finance web app: budgeting by pots, statement import, shared rides, investments and history in one dashboard.',
    },
    services: ['interfaces', 'dev'],
    year: '2026',
    size: 'normal',
    cover: '/portfolio/gastos/telas/01-dashboard.webp',
    site: {
      video: '/portfolio/gastos/navegacao.mp4',
      poster: '/portfolio/gastos/poster.webp',
      pages: [
        { name: { pt: 'Painel', en: 'Dashboard' }, screen: '/portfolio/gastos/telas/01-dashboard.webp', full: '/portfolio/gastos/telas/01-dashboard.webp' },
        { name: { pt: 'Mês atual', en: 'Current month' }, screen: '/portfolio/gastos/telas/02-mes-atual.webp', full: '/portfolio/gastos/telas/02-mes-atual.webp' },
        { name: { pt: 'Mês por pote', en: 'Month by pot' }, screen: '/portfolio/gastos/telas/03-mes-por-pote.webp', full: '/portfolio/gastos/telas/03-mes-por-pote.webp' },
        { name: { pt: 'Caronas', en: 'Rides' }, screen: '/portfolio/gastos/telas/04-caronas.webp', full: '/portfolio/gastos/telas/04-caronas.webp' },
        { name: { pt: 'Extrato do cartão', en: 'Card statement' }, screen: '/portfolio/gastos/telas/05-extrato-cartao.webp', full: '/portfolio/gastos/telas/05-extrato-cartao.webp' },
        { name: { pt: 'Extrato do banco', en: 'Bank statement' }, screen: '/portfolio/gastos/telas/06-extrato-banco-por-pote.webp', full: '/portfolio/gastos/telas/06-extrato-banco-por-pote.webp' },
        { name: { pt: 'Investimentos', en: 'Investments' }, screen: '/portfolio/gastos/telas/07-investimentos.webp', full: '/portfolio/gastos/telas/07-investimentos.webp' },
        { name: { pt: 'Histórico', en: 'History' }, screen: '/portfolio/gastos/telas/08-historico.webp', full: '/portfolio/gastos/telas/08-historico.webp' },
        { name: { pt: 'Ganhos', en: 'Income' }, screen: '/portfolio/gastos/telas/09-ganhos.webp', full: '/portfolio/gastos/telas/09-ganhos.webp' },
        { name: { pt: 'Contas', en: 'Bills' }, screen: '/portfolio/gastos/telas/10-contas.webp', full: '/portfolio/gastos/telas/10-contas.webp' },
      ],
    },
  },
  {
    id: 'divisao-de-viagem',
    client: 'Divisão de viagem',
    own: true,
    summary: {
      pt: 'App para dividir os gastos de viagens de carro: combustível calculado por quilômetro e consumo, pedágio, estacionamento e acerto de contas.',
      en: 'An app to split road trip costs: fuel calculated by distance and mileage, tolls, parking and settling up.',
    },
    services: ['interfaces', 'dev'],
    year: '2026',
    size: 'normal',
    cover: '/portfolio/divisao-de-viagem/telas/02-visao-geral.webp',
    site: {
      device: 'mobile',
      video: '/portfolio/divisao-de-viagem/navegacao.mp4',
      poster: '/portfolio/divisao-de-viagem/poster.webp',
      pages: [
        { name: { pt: 'Entrar', en: 'Sign in' }, screen: '/portfolio/divisao-de-viagem/telas/01-login.webp', full: '/portfolio/divisao-de-viagem/paginas/01-login.webp' },
        { name: { pt: 'Visão geral', en: 'Overview' }, screen: '/portfolio/divisao-de-viagem/telas/02-visao-geral.webp', full: '/portfolio/divisao-de-viagem/paginas/02-visao-geral.webp' },
        { name: { pt: 'Mês', en: 'Month' }, screen: '/portfolio/divisao-de-viagem/telas/03-mes.webp', full: '/portfolio/divisao-de-viagem/paginas/03-mes.webp' },
        { name: { pt: 'Viagem', en: 'Trip' }, screen: '/portfolio/divisao-de-viagem/telas/04-viagem-detalhe.webp', full: '/portfolio/divisao-de-viagem/paginas/04-viagem-detalhe.webp' },
        { name: { pt: 'Lançar combustível', en: 'Add fuel' }, screen: '/portfolio/divisao-de-viagem/telas/05-lancar-combustivel.webp', full: '/portfolio/divisao-de-viagem/paginas/05-lancar-combustivel.webp' },
        { name: { pt: 'Editar despesa', en: 'Edit expense' }, screen: '/portfolio/divisao-de-viagem/telas/06-editar-despesa.webp', full: '/portfolio/divisao-de-viagem/paginas/06-editar-despesa.webp' },
        { name: { pt: 'Análise', en: 'Analysis' }, screen: '/portfolio/divisao-de-viagem/telas/07-analise.webp', full: '/portfolio/divisao-de-viagem/paginas/07-analise.webp' },
      ],
    },
  },
];

// Identificador usado nas pastas convertidas: 'Alba 01' → 'alba-01'.
export const setId = (src: string) =>
  src
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
