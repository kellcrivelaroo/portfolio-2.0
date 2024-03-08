import { ArrowRight } from 'lucide-react'

import CvDrawer from '../custom/cv-drawer'
import Logo from '../custom/logo'
import OptionsMenu from '../custom/options-menu'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header
      className="fixed top-0 z-[90] mx-auto grid w-screen grid-cols-[auto_1fr_auto] items-center overflow-x-auto pb-10 
      pl-12 pr-16 pt-3"
    >
      <CvDrawer />
      <div
        className="mx-auto grid w-[1200px] max-w-[80%] grid-cols-[200px_1fr_200px] items-center rounded-full border
      border-foreground/20 bg-background/50 px-10 py-2 shadow-md backdrop-blur-md"
      >
        <Logo />
        <nav>
          <ul className="flex items-center justify-center gap-12 text-lg">
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Porfólio</a>
            </li>
            <li>
              <a href="#">Projetos Pessoais</a>
            </li>
          </ul>
        </nav>
        <div className="ml-auto">
          <Button className="gap-2 pr-4">
            Contato <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>
      <OptionsMenu />
    </header>
  )
}

export default Header
