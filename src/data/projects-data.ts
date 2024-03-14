import { StaticImageData } from 'next/image'
import calculadoraCalorias from 'public/projects/calculadora.png'
import capputeeno from 'public/projects/capputeeno.png'
import coinsynch1 from 'public/projects/coinsynch_1.png'
import coinsynch2 from 'public/projects/coinsynch_2.png'
import edusynch1 from 'public/projects/edusynch_1.png'
import edusynch2 from 'public/projects/edusynch_2.png'
import gerenciadorFinancas from 'public/projects/gerenciador_financas.png'
import poll1 from 'public/projects/polls_1.png'
import poll2 from 'public/projects/polls_2.png'
import portfolio1 from 'public/projects/portfolio_1.png'
import portfolio2 from 'public/projects/portfolio_2.png'

export interface Project {
  id: number
  title: string
  images: {
    image1: StaticImageData
    image2?: StaticImageData
  }
  content: string[]
  liveUrl: string
  githubUrl?: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'EduSynch',
    images: {
      image1: edusynch1,
      image2: edusynch2,
    },
    content: [
      'Em minha última posição como desenvolvedor FrontEnd, tive o privilégio de integrar a equipe da EduSynch, uma empresa americana líder no setor de educação.',
      'Entre minhas contribuição à empresa, posso destacar o aprimoramento contínuo do site institucional, a implementação de novos módulos e funcionalidade no CMS (Sistema de Gestão de Conteúdos) e liderança no MVP de uma solução inovadora da empresa.',
    ],
    liveUrl: 'https://edusynch.com',
  },
  {
    id: 2,
    title: 'Polls - Criador de enquetes',
    images: {
      image1: poll1,
      image2: poll2,
    },
    content: [
      'Polls é um projeto FullStack que oferece uma plataforma para criar e compartilhar enquetes.',
      'O BackEnd, foi desenvolvido utilizando as tecnologias Node.js, Fastify e Prisma, com Redis e WebHooks.',
      'Já no FrontEnd, foi utilizado Next.js 14 e TypeScript, juntamente com Shadcn/UI para uma interface de usuário moderna responsiva e intuitiva.',
    ],
    liveUrl: 'https://polls-web.vercel.app',
    githubUrl: 'https://github.com/kellcrivelaroo/polls-web',
  },
  {
    id: 3,
    title: 'CoinSynch',
    images: {
      image1: coinsynch1,
      image2: coinsynch2,
    },
    content: [
      'CoinSynch é um projeto fictício desenvolvido como um desafio técnico para uma vaga de programador FrontEnd.',
      'Ele consiste em uma Landing Page que fornece informações sobre criptomoedas e um painel administrativo para gerenciamento de sua carteira de criptomoedas e transações.',
      'Entre as tecnologias utilizadas, destacam-se: Next.js 13, Tailwind CSS, Axios, Chart.js e Zod.',
    ],
    liveUrl: 'https://coinsynch-delta.vercel.app/',
    githubUrl: 'https://github.com/kellcrivelaroo/coinsynch',
  },
  {
    id: 4,
    title: 'Portfólio 1.0',
    images: {
      image1: portfolio1,
      image2: portfolio2,
    },
    content: [
      'Versão 1.0 do meu portfólio de projetos.',
      'Optei pelo desenvolvimento de nova versão, mais moderna, profissional, manutenível, e que reflete de forma mais precisa minhas habilidades como desenvolvedor FullStack.',
      'Tecnologias utilizadas: Next.js, Typescript e Tailwind CSS',
    ],
    liveUrl: 'https://portfolio-delta-three-900.vercel.app/',
    githubUrl: 'https://github.com/kellcrivelaroo/portfolio',
  },
  {
    id: 5,
    title: 'Gerenciador de Finanças',
    images: {
      image1: gerenciadorFinancas,
    },
    content: [
      'Aplicativo para gerenciamento de finanças, que permite aos usuários cadastrem suas despesas e receitas, além de fornecer recursos para análise dos dados através de gráficos.',
      'Tecnologias utilizadas: Next.js, Typescript, Tailwind CSS, Shadcn/UI, Zod e Recharts',
    ],
    liveUrl: 'https://gerenciador-financas-six.vercel.app/',
    githubUrl: 'https://github.com/kellcrivelaroo/gerenciador-financas',
  },
  {
    id: 6,
    title: 'Capputeeno',
    images: {
      image1: capputeeno,
    },
    content: [
      'Capputeeno é a minha solução para um desafio técnico aberto (FrontEnd Challenge)',
      'Trata-se de uma loja virtual fictícia que incorpora uma ampla gama de funcionalidades encontradas em e-commerces da atualidade.',
    ],
    liveUrl: 'https://capputeeno-frontend-challenge.vercel.app/',
    githubUrl:
      'https://github.com/kellcrivelaroo/capputeeno-frontend-challenge',
  },
  {
    id: 7,
    title: 'Calculadora de Calorias',
    images: {
      image1: calculadoraCalorias,
    },
    content: [
      'Aplicação web que permite aos usuários calcular sua Taxa Metabólica Basal (TMB) e obter uma sugestão de calorias diárias com base em seu peso, altura, idade, sexo, nível de atividade e objetivo.',
      'O projeto foi criada utilizando as tecnologias React, TypeScript e Lottie para adicionar animações aos ícones.',
    ],
    liveUrl: 'https://calculadora-calorias-iota.vercel.app/',
    githubUrl: 'https://github.com/kellcrivelaroo/calculadora-calorias',
  },
]
