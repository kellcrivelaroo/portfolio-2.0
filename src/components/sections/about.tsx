import Image from 'next/image'

import avatar from '@/../public/kell.png'

import Underline from '../custom/underline'

const resizeConstant = 2.2

const About = () => {
  return (
    <div className="relative flex w-full items-center justify-center bg-dot-black/[0.25] dark:bg-dot-white/[0.15]">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background 
        [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"
      />

      <div className="container z-20 mx-auto flex flex-col items-center pb-20 pt-28">
        <div className="mb-5 flex items-center justify-center gap-10">
          <div className="relative px-8">
            <h2 className="font-alt text-6xl font-bold leading-normal tracking-wider">
              Sobre
            </h2>
            <Underline />
          </div>
          <div className="overflow-hidden rounded-full ">
            <Image
              src={avatar}
              alt=""
              width={avatar.width / resizeConstant}
              height={avatar.height / resizeConstant}
              className="scale-[1.02]"
            />
          </div>
        </div>
        <div className="space-y-2">
          <p className="mx-auto max-w-[75%] indent-12 text-xl">
            Meu nome é Kellington Crivelaro, tenho 31 anos. Sou formado como
            técnico de informática pelo CTI (Colégio Técnico Industrial - UNESP)
            desde 2009. Logo na sequencia, me formei como engenheiro civil, no
            entanto, minha paixão pela tecnologia me levou a buscar uma nova
            transição para a área de programação, resultando na criação da Flame
            Tecnologia, no ano de 2022.
          </p>
          <p className="mx-auto max-w-[75%] indent-12 text-xl">
            Com habilidades em programação, desenvolvimento web e gerenciamento
            de projetos, estou comprometido em fornecer soluções eficazes e sob
            medida para os desafios dos meus clientes. Sou motivado pela busca
            constante de conhecimento, valorizo a colaboração e estou animado
            para contribuir em projetos desafiadores, trazendo minha experiência
            técnica e paixão pela tecnologia.
          </p>
          <p className="mx-auto max-w-[75%] indent-12 text-xl">
            Se você está procurando por um profissional versátil, orientado para
            resultados e com um histórico comprovado de sucesso, estou pronto
            para fazer a diferença em sua próxima iniciativa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
