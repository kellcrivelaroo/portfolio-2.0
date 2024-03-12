import { Mail } from 'lucide-react'

import Social from '../custom/social'
import Underline from '../custom/underline'

const Footer = () => {
  return (
    <footer className="relative mt-5 ">
      <Underline className="top-0 max-w-[94%] lg:translate-x-[3%]" />
      <div className="flex grid-cols-[40%_1fr_40%] flex-col items-center justify-center py-5 pl-4 lg:grid lg:px-28">
        <span className="order-3 lg:order-1">
          Desenvolvido por Kell Crivelaro © {new Date().getFullYear()}
        </span>
        <div className="order-1 flex items-center justify-center">
          <Social />
        </div>
        <span className="order-2 mb-2 flex items-center gap-2 lg:mb-0 lg:ml-auto">
          <Mail className="size-5" />
          kellcrivelaro92@gmail.com
        </span>
      </div>
    </footer>
  )
}

export default Footer
