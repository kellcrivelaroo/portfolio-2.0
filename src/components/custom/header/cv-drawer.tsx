import { Download } from 'lucide-react'
import { ReactNode } from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../ui/sheet'
import Link from '../link'
import PdfViewer from './pdf-viewer'

interface CvSheetProps {
  children?: ReactNode
}

const CvSheet = ({ children }: CvSheetProps) => {
  return (
    <Sheet>
      {children ? (
        <SheetTrigger asChild>{children}</SheetTrigger>
      ) : (
        <SheetTrigger
          className="glow fixed bottom-7 left-3 z-[91] size-12 items-center justify-center rounded-full border bg-background font-alt
        font-medium opacity-80 backdrop-blur-sm transition-all duration-500 hover:border-foreground/70 hover:opacity-100
        lg:bottom-auto lg:left-12 lg:top-6 lg:text-lg"
        >
          CV
        </SheetTrigger>
      )}

      <SheetContent
        side="left"
        className="z-[99] min-w-full lg:w-[60%] lg:min-w-[920px] lg:max-w-[60%]"
      >
        <div className="flex flex-col items-center ">
          <SheetHeader className="mb-14">
            <SheetTitle className="text-center font-alt text-xl tracking-wider sm:container lg:text-2xl">
              Curriculum Vitae
            </SheetTitle>
            <SheetDescription className="text-center">
              Sinta-se a vontade para analisar ou baixar a versão atualizada do
              meu currículo
            </SheetDescription>
          </SheetHeader>
          <div className="-translate-y-12">
            <PdfViewer />
          </div>
        </div>

        <Link
          href="/cv/kellington_crivelaro_desenvolvedor_fullstack.pdf"
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 px-5 opacity-90 hover:opacity-100 lg:bottom-6"
        >
          <Download className="size-5" />
          Download CV
        </Link>
      </SheetContent>
    </Sheet>
  )
}

export default CvSheet
