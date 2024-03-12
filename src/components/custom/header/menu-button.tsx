import Link from 'next/link'

interface MenuButtonProps {
  title: string
  href: string
}

const MenuButton = ({ title, href }: MenuButtonProps) => {
  return (
    <li>
      <Link
        href={href}
        className="relative p-0.5 before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-center
        before:scale-x-0 before:bg-sky-500 before:transition-all before:duration-500 hover:before:scale-x-100"
      >
        {title}
      </Link>
    </li>
  )
}

export default MenuButton
