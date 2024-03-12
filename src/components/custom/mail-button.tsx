'use client'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const EMAIL = 'kellcrivelaro92@gmail.com'

const MailButton = () => {
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(EMAIL)
      toast.success('E-mail copiado com sucesso!')
    } catch {
      toast.error('Erro ao copiar e-mail.')
    }
  }

  return (
    <Button
      className="justify-center gap-0.5 py-1.5 pl-2 pr-3 text-base sm:text-lg lg:min-w-[27rem] lg:gap-2 lg:px-6 lg:text-2xl"
      onClick={handleCopy}
    >
      <span className="w-full pl-2">{EMAIL}</span>
      <Separator orientation="vertical" className="h-6" />
      <Copy className="size-5" />
    </Button>
  )
}

export default MailButton
