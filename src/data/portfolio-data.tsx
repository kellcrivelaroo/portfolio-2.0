import { StaticImageData } from 'next/image'
import audioclear from 'public/portfolio/audioclear.png'
import beyond from 'public/portfolio/beyond.png'
import caritas from 'public/portfolio/caritas.png'
import dabusabiati from 'public/portfolio/dabusabiati.png'
import dedica from 'public/portfolio/dedica.png'
import flame from 'public/portfolio/flame.png'
import k7engenharia from 'public/portfolio/k7engenharia.png'
import lazuli from 'public/portfolio/lazuli.png'
import magistral from 'public/portfolio/magistral.png'
import nord from 'public/portfolio/nord.png'
import spazio from 'public/portfolio/spazio.png'
import spumpalah from 'public/portfolio/spumpalah.png'
import tendtudo from 'public/portfolio/tendtudo.png'
import textil from 'public/portfolio/textil.png'
import thinsol from 'public/portfolio/thinsol.png'

export type Card = {
  id: number
  name: string
  className: string
  thumbnail: StaticImageData
  alt: string
  url: string
}

export const portfolioCards: Card[] = [
  // 1
  {
    id: 1,
    name: 'Flame',
    className: 'md:col-span-5 md:row-span-6',
    thumbnail: flame,
    alt: 'Flame Tecnologia',
    url: 'https://flametecnologia.com.br',
  },
  // 2
  {
    id: 2,
    name: 'Thinsol',
    className: 'md:col-span-6 md:row-span-7',
    thumbnail: thinsol,
    alt: 'Thinsol - Soluções Químicas',
    url: 'https://www.thinsol.com.br',
  },
  // 3
  {
    id: 3,
    name: 'Beyond',
    className: 'md:col-span-4 md:row-span-6',
    thumbnail: beyond,
    alt: 'Beyond Assessoria',
    url: 'https://bndassessoria.com.br',
  },
  //4
  {
    id: 4,
    name: 'Lazuli',
    className: 'md:col-span-5 md:row-span-6',
    thumbnail: lazuli,
    alt: 'UseLazuli - Moda Feminina',
    url: 'https://uselazulishop.com.br',
  },
  //5
  {
    id: 5,
    name: 'Nord Sorvetes',
    className: 'md:col-span-5 md:row-span-3',
    thumbnail: nord,
    alt: 'Nord Sorvetes',
    url: 'https://nordsorvetes.com.br',
  },
  //6
  {
    id: 6,
    name: 'Dedica Odonto',
    className: 'md:col-span-5 md:row-span-3',
    thumbnail: dedica,
    alt: 'Dedica Odonto',
    url: 'https://dedicaodonto.com.br',
  },
  //7
  {
    id: 7,
    name: 'AudiClear',
    className: 'md:col-span-5 md:row-span-4',
    thumbnail: audioclear,
    alt: 'AudioClear - Aparelhos auditivos',
    url: 'https://audioclear.com.br',
  },
  //8
  {
    id: 8,
    name: 'SpumPalah',
    className: 'md:col-span-7 md:row-span-5',
    thumbnail: spumpalah,
    alt: 'SpumPalah - Soluções domóticas',
    url: 'https://spumpalah.com.br',
  },
  //9
  {
    id: 9,
    name: 'Tendtudo Piscinas',
    className: 'md:col-span-7 md:row-span-4',
    thumbnail: tendtudo,
    alt: 'Tendtudo Piscinas',
    url: 'https://tendtudopiscinasbauru.com.br',
  },
  //10
  {
    id: 10,
    name: 'Dabus Abiati',
    className: 'md:col-span-6 md:row-span-4',
    thumbnail: dabusabiati,
    alt: 'Dabus Abiati - Odontologia',
    url: 'https://dabusabiati.com.br',
  },
  //11
  {
    id: 11,
    name: 'K7 Engenharia',
    className: 'md:col-span-5 md:row-span-5',
    thumbnail: k7engenharia,
    alt: 'K7 Engenharia',
    url: 'https://k7engenharia.com',
  },
  //12
  {
    id: 12,
    name: 'Têxtil Piratininga',
    className: 'md:col-span-7 md:row-span-5',
    thumbnail: textil,
    alt: 'Têxtil Piratininga',
    url: 'https://textilpiratininga.com.br',
  },
  //13
  {
    id: 13,
    name: 'Spazio Colchões',
    className: 'md:col-span-7 md:row-span-4',
    thumbnail: spazio,
    alt: 'Spazio Colchões',
    url: 'https://spaziocolchoes.com.br',
  },
  //14
  {
    id: 14,
    name: 'Cáritas Bauru',
    className: 'md:col-span-6 md:row-span-4',
    thumbnail: caritas,
    alt: 'Cáritas Bauru',
    url: 'https://caritasbauru.org.br/',
  },
]
