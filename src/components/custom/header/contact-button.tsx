'use client'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-scroll'

import { Button } from '@/components/ui/button'

const ContactButton = () => {
  return (
    <Button className="gap-2 pr-4">
      <Link
        to="contact"
        duration={500}
        smooth
        className="flex items-center gap-2"
      >
        Contato <ArrowRight className="size-5" />
      </Link>
    </Button>
  )
}

export default ContactButton
