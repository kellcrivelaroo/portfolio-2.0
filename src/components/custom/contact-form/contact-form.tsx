'use client'
import autoAnimate from '@formkit/auto-animate'
import { zodResolver } from '@hookform/resolvers/zod'
import { animate } from 'framer-motion'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'

import { Button } from '../../ui/button'
import { MovingBorderCard } from '../moving-border-card'
import { social } from '../social'
import Underline from '../underline'
import ContactSocial from './contact-social'
import { Input } from './input'
import { Label } from './label'
import { TextArea } from './text-area'

const formSchema = z.object({
  subject: z.string().min(1, { message: 'Sobre qual assunto deseja tratar?' }),
  name: z.string().min(1, { message: 'Digite seu nome, por favor.' }),
  email: z
    .string()
    .min(1, { message: 'Digite seu e-mail, por favor.' })
    .email({ message: 'Digite um e-mail válido, por favor.' }),
  message: z.string().min(1, { message: 'Digite uma mensagem, por favor.' }),
})

type FormSchema = z.infer<typeof formSchema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const animate = useRef(null)

  useEffect(() => {
    animate.current && autoAnimate(animate.current)
  }, [animate])

  const submit = (data: FormSchema) => {
    console.log(data)
  }

  return (
    <MovingBorderCard
      containerClassName="w-fit h-full items-center justify-center shadow-lg -translate-x-0.5"
      borderClassName="w-[480px] h-[220px]"
      duration={8000}
      borderRadius="1rem"
    >
      <form
        className="mx-4 my-6 flex w-[540px] max-w-[75vw] flex-col gap-3 lg:mx-14 lg:my-8 lg:mb-10 lg:gap-5"
        ref={animate}
        onSubmit={handleSubmit(submit)}
      >
        <span className="mb-1 text-center text-base leading-tight lg:text-lg">
          Sinta-se a vontade para enviar uma mensagem!
        </span>

        <Input type="text" {...register('subject')} placeholder="Assunto" />
        {errors.subject && (
          <span className="-mb-2 -mt-4 pl-3 text-sm font-medium text-cyan-500">
            {errors.subject.message}
          </span>
        )}

        <Input type="text" {...register('name')} placeholder="Nome" />
        {errors.name && (
          <span className="-mb-2 -mt-4 pl-3 text-sm font-medium text-cyan-500">
            {errors.name.message}
          </span>
        )}

        <Input type="text" {...register('email')} placeholder="E-mail" />
        {errors.email && (
          <span className="-mb-2 -mt-4 pl-3 text-sm font-medium text-cyan-500">
            {errors.email.message}
          </span>
        )}

        <TextArea {...register('message')} placeholder="Mensagem" />
        {errors.message && (
          <span className="-mb-2 -mt-4 pl-3 text-sm font-medium text-cyan-500">
            {errors.message.message}
          </span>
        )}

        <div className="ml-auto flex w-fit pr-1">
          <button
            className="group relative flex w-fit items-center justify-center gap-3 rounded-full border border-slate-800 
            bg-slate-950/80 px-8 py-1 font-alt text-lg font-normal tracking-wider text-slate-200 transition-all duration-500 hover:border-slate-700/50 
            hover:text-foreground hover:brightness-[1.35] lg:px-14"
            type="submit"
          >
            Enviar
            <Underline className="translate-y-px opacity-30 transition-all duration-500 group-hover:opacity-60" />
          </button>
        </div>

        <div className="my-3 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-cyan-700 lg:mb-2 lg:mt-5" />

        <ContactSocial />
      </form>
    </MovingBorderCard>
  )
}

export default ContactForm
