import { ContactForm } from '../custom/contact-form/contact-form'

const ContactEmail = ({ subject, name, email, message }: ContactForm) => {
  return (
    <div>
      <h1>Portfólio - Novo contato!</h1>
      <p>Assunto: {subject}</p>
      <p>Nome: {name}</p>
      <p>E-mail: {email}</p>
      <p>Mensagem: {message}</p>
    </div>
  )
}

export default ContactEmail
