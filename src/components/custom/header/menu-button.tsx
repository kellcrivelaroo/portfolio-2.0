'use client'
import { Link } from 'react-scroll'

interface MenuButtonProps {
  title: string
  href: string
  toggle?: VoidFunction
}

const MenuButton = ({ title, href, toggle }: MenuButtonProps) => {
  const handleClick = () => {
    if (toggle) toggle()
  }

  return (
    <li>
      <Link
        to={href}
        smooth
        duration={500}
        onClick={handleClick}
        className="relative block cursor-pointer p-0.5 before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-center
        before:scale-x-0 before:bg-sky-500 before:transition-all before:duration-500 hover:before:scale-x-100"
      >
        {title}
      </Link>
    </li>
  )
}

export default MenuButton
