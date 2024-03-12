'use client'
import { Moon, MoreHorizontal, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu'

type ThemeInfo = {
  title: string
  icon: JSX.Element
}

const THEMES: Record<string, ThemeInfo> = {
  light: {
    title: 'escuro',
    icon: <Moon className="size-5" />,
  },
  dark: {
    title: 'claro',
    icon: <Sun className="size-5" />,
  },
}

const OptionsMenu = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="glow fixed bottom-7 right-4 z-[90] flex size-10 items-center justify-center rounded-full border border-slate-800 
        bg-background/70 font-alt text-foreground/50 backdrop-blur-sm transition-all duration-500 hover:border-foreground/70 
        hover:text-foreground/80 lg:bottom-auto lg:left-[calc(100vw-100px)] lg:right-auto lg:top-7"
      >
        <MoreHorizontal className="size-5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        alignOffset={-4}
        sideOffset={8}
        className="rounded-lg border-foreground/20"
      >
        {theme && (
          <DropdownMenuItem
            onClick={toggleTheme}
            className="flex cursor-pointer gap-2 px-3 text-foreground/80 hover:text-foreground"
          >
            {THEMES[theme!]?.icon}
            {` Tema `}
            {THEMES[theme!]?.title}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default OptionsMenu
