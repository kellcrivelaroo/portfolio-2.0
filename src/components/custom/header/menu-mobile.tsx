'use client'
import { Menu } from 'lucide-react'
import { useReducer } from 'react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import Social from '../social'
import Underline from '../underline'
import CvSheet from './cv-drawer'
import NavLinks from './nav-links'

const MenuMobile = () => {
  const [isOpen, toggle] = useReducer((state) => !state, false)

  return (
    <div className="size-8 lg:hidden">
      <Sheet open={isOpen} onOpenChange={toggle}>
        <SheetTrigger>
          <Menu className="size-8" />
        </SheetTrigger>
        <SheetContent className="z-[99] bg-background/80 backdrop-blur-sm lg:hidden">
          <div className="relative flex flex-col items-center justify-center gap-6 py-10">
            <NavLinks toggle={toggle} full />
            <Underline />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 pt-6">
            <CvSheet>
              <Button>Curriculum Vitae</Button>
            </CvSheet>
            <Social />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile
