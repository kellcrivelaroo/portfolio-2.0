import { Github, Instagram, Linkedin } from 'lucide-react'

import Underline from '../underline'

const ContactSocial = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-2 lg:gap-2.5">
      <span className="font-alt text-lg leading-none tracking-wider lg:text-xl">
        Redes Sociais:
      </span>
      <a
        href="https://github.com/kellcrivelaroo"
        target="_blank"
        className="group relative flex w-full items-center justify-center gap-3 rounded-full border bg-background px-7 py-1 font-alt 
        text-lg font-medium tracking-wider transition-all duration-500 hover:border-slate-700/50 hover:text-foreground 
        hover:brightness-110 dark:border-slate-800 dark:bg-slate-950/80 dark:font-normal dark:text-slate-200 
        hover:dark:brightness-[1.35] lg:w-fit lg:min-w-[320px]"
      >
        <span className="flex min-w-[128px] items-center gap-6">
          <Github className="ml-px size-5" />
          Github
        </span>
        <Underline className="translate-y-px opacity-80 transition-all duration-500 dark:opacity-30 group-hover:dark:opacity-60" />
      </a>
      <a
        href="https://www.linkedin.com/in/kellcrivelaro"
        target="_blank"
        className="group relative flex w-full items-center justify-center gap-3 rounded-full border bg-background px-7 py-1 font-alt 
        text-lg font-medium tracking-wider transition-all duration-500 hover:border-slate-700/50 hover:text-foreground 
        hover:brightness-110 dark:border-slate-800 dark:bg-slate-950/80 dark:font-normal dark:text-slate-200 
        hover:dark:brightness-[1.35] lg:w-fit lg:min-w-[320px]"
      >
        <span className="flex min-w-[128px] items-center gap-5">
          <Linkedin className="size-5" />
          Linkedin
        </span>
        <Underline className="translate-y-px opacity-80 transition-all duration-500 dark:opacity-30 group-hover:dark:opacity-60" />
      </a>
      <a
        href="https://instagram.com/kellcrivelaro"
        target="_blank"
        className="group relative flex w-full items-center justify-center gap-3 rounded-full border bg-background px-7 py-1 font-alt 
        text-lg font-medium tracking-wider transition-all duration-500 hover:border-slate-700/50 hover:text-foreground 
        hover:brightness-110 dark:border-slate-800 dark:bg-slate-950/80 dark:font-normal dark:text-slate-200 
        hover:dark:brightness-[1.35] lg:w-fit lg:min-w-[320px]"
      >
        <span className="flex items-center gap-4">
          <Instagram className="size-5" />
          Instagram
        </span>
        <Underline className="translate-y-px opacity-80 transition-all duration-500 dark:opacity-30 group-hover:dark:opacity-60" />
      </a>
    </div>
  )
}

export default ContactSocial
