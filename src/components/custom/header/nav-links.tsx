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
      <ul className="flex flex-col items-center justify-center gap-6 text-lg lg:flex-row lg:gap-12">
        {links.map((link) => (
          <MenuButton key={link.title} toggle={toggle} {...link} />
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
