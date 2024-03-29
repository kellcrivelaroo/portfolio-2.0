import ContactButton from '../custom/header/contact-button'
import CvDrawer from '../custom/header/cv-drawer'
import Logo from '../custom/header/logo'
import MenuMobile from '../custom/header/menu-mobile'
import NavLinks from '../custom/header/nav-links'
import OptionsMenu from '../custom/header/options-menu'

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-[90] mx-auto flex w-screen items-center px-4 pt-3 lg:grid lg:pl-12 lg:pr-16">
        <div
          className="mx-auto flex w-full items-center justify-between rounded-full border bg-background/50 px-6 py-2.5 shadow-md backdrop-blur-md
      dark:border-slate-800 lg:grid lg:w-[1200px] lg:max-w-[80%] lg:grid-cols-[200px_1fr_200px] lg:px-10"
        >
          <Logo />

          <MenuMobile />

          <div className="hidden lg:block">
            <NavLinks />
          </div>

          <div className="ml-auto hidden lg:flex">
            <ContactButton />
          </div>
        </div>
      </header>
      <CvDrawer />
      <OptionsMenu />
    </>
  )
}

export default Header
