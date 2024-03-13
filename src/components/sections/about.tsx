import Image from 'next/image'
import avatar from 'public/kell.png'

import Heading from '../custom/heading'

const resizeConstant = 2.2

const About = () => {
  return (
    <div
      id="about"
      className="relative flex w-full items-center justify-center pt-28 bg-dot-black/[0.25] dark:bg-dot-white/[0.15]
      lg:pt-0"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background 
        [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"
      />

      <div className="container relative z-20 mx-auto flex flex-col items-center pt-20 lg:gap-5 lg:py-28">
        <Heading>Sobre</Heading>
        <div className="static mx-auto space-y-3 px-4 text-justify indent-10 text-base lg:relative lg:max-w-[80%] xl:text-2xl">
          <div className="absolute -top-10 right-1/2 translate-x-1/2 overflow-hidden rounded-full lg:right-3 lg:top-0 lg:translate-x-0">
            <Image
              src={avatar}
              alt="Foto de perfil - Kell Crivelaro"
              width={avatar.width / resizeConstant}
              height={avatar.height / resizeConstant}
              className="max-w-[112px] scale-[1.02] lg:max-w-full"
            />
          </div>
          <p className="lg:pr-52">
            Sou Kellington Crivelaro, tenho 31 anos. Sou formado como técnico de
            informática pelo CTI (Colégio Técnico Industrial - UNESP) desde
            2009. Logo na sequencia, me formei como engenheiro civil, no
            entanto, minha paixão pela tecnologia me levou a buscar uma nova
            transição para a área de programação, resultando na criação da Flame
            Tecnologia, no ano de 2022.
          </p>
          <p>
            Com habilidades em programação, desenvolvimento web e gerenciamento
            de projetos, estou comprometido em fornecer soluções eficazes e sob
            medida para os desafios dos meus clientes. Sou motivado pela busca
            constante de conhecimento, valorizo a colaboração e estou animado
            para contribuir em projetos desafiadores, trazendo minha experiência
            técnica e paixão pela tecnologia.
          </p>
          <p>
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
