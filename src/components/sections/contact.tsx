import ContactForm from '../custom/contact-form/contact-form'
import Heading from '../custom/heading'

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-slate-100 to-background to-70% pt-0 dark:from-slate-800"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center 
        [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"
      />
      <div
        className="flex min-h-screen w-full flex-col items-center 
      justify-center bg-grid-small-black/[0.35] dark:bg-grid-small-white/[0.15] lg:py-20"
      >
        <div className="pointer-events-none absolute -top-1 h-96 w-screen bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-800" />
        <div className="pointer-events-none absolute bottom-0 h-72 w-screen bg-gradient-to-t from-background to-transparent" />

        <Heading>Contato</Heading>

        <div className="mt-4 translate-x-1 lg:mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
