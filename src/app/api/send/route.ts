import { NextRequest } from 'next/server'
import { Resend } from 'resend'

import ContactEmail from '@/components/email/contact-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const requestData = await request.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['kellcrivelaro92@gmail.com'],
      subject: 'Novo contato - Porftólio',
      react: ContactEmail(requestData),
    })

    if (error) {
      return Response.json({ error })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error })
  }
}
