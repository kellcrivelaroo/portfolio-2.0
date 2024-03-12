import { StaticImageData } from 'next/image'
import calculadoraCalorias from 'public/personal-projects/calculadora.png'
import capputeeno from 'public/personal-projects/capputeeno.png'
import coinsynch1 from 'public/personal-projects/coinsynch_1.png'
import coinsynch2 from 'public/personal-projects/coinsynch_2.png'
import geradorSenha from 'public/personal-projects/gerador_senha.png'
import gerenciadorFinancas from 'public/personal-projects/gerenciador_financas.png'
import poll1 from 'public/personal-projects/polls_1.png'
import poll2 from 'public/personal-projects/polls_2.png'
import portfolio1 from 'public/personal-projects/portfolio_1.png'
import portfolio2 from 'public/personal-projects/portfolio_2.png'

export interface Project {
  id: number
  title: string
  images: {
    image1: StaticImageData
    image2?: StaticImageData
  }
  content: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Polls - Gerador de enquete',
    images: {
      image1: poll1,
      image2: poll2,
    },
    content: 'gerador de enquete',
  },
  {
    id: 2,
    title: 'CoinSynch',
    images: {
      image1: coinsynch1,
      image2: coinsynch2,
    },
    content: 'CoinSynch',
  },
  {
    id: 3,
    title: 'Portfólio 1.0',
    images: {
      image1: portfolio1,
      image2: portfolio2,
    },
    content: 'portfólio',
  },
  {
    id: 4,
    title: 'Gerenciador de Finanças',
    images: {
      image1: gerenciadorFinancas,
    },
    content: 'gerenciador de finanças',
  },
  {
    id: 5,
    title: 'Capputeeno',
    images: {
      image1: capputeeno,
    },
    content: 'capputeeno',
  },
  {
    id: 6,
    title: 'Calculadora de Calorias',
    images: {
      image1: calculadoraCalorias,
    },
    content: 'gerador senha',
  },
  {
    id: 7,
    title: 'Gerador de Senha',
    images: {
      image1: geradorSenha,
    },
    content: 'gerador senha',
  },
]
