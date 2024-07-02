import CvSheet from './cv-drawer'
import MenuButton from './menu-button'

const navLinks = [
  {
    title: 'Início',
    href: 'home',
  },
  {
    title: 'Sobre',
    href: 'about',
  },
  {
    title: 'Projetos',
    href: 'projects',
  },
  {
    title: 'Porfólio',
    href: 'portfolio',
  },
  {
    title: 'Contato',
    href: 'contact',
  },
]

interface NavLinksProps {
  toggle?: VoidFunction
  full?: boolean
}

const NavLinks = ({ toggle, full = false }: NavLinksProps) => {
  const links = full ? navLinks : navLinks.slice(0, 4)
  return (
    <nav>
      <ul className="flex flex-col items-center justify-center gap-6 text-lg lg:flex-row lg:gap-10">
        {links.map((link) => (
          <MenuButton key={link.title} toggle={toggle} {...link} />
        ))}
        <li className="hidden lg:block">
          <CvSheet>
            <button
              className="relative block cursor-pointer p-0.5 before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-center
        before:scale-x-0 before:bg-sky-500 before:transition-all before:duration-500 hover:before:scale-x-100"
            >
              Currículo
            </button>
          </CvSheet>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks
