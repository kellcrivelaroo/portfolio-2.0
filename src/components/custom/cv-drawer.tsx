import { Button } from '../ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

const CvSheet = () => {
  return (
    <Sheet>
      <SheetTrigger
        className="glow flex size-10 items-center justify-center rounded-full border border-foreground/30 
        bg-background font-alt text-foreground/50  shadow-lg transition-all duration-500 hover:scale-105 
        hover:border-foreground/70 hover:text-foreground/80"
      >
        CV
      </SheetTrigger>
      <SheetContent side="left" className="z-[99] min-w-[75%]">
        <SheetHeader>
          <SheetTitle>CV</SheetTitle>
          <SheetDescription>this is my cv</SheetDescription>
        </SheetHeader>
        <div className="mt-10">
          What do u think?What do u think?What do u think?What do u think?What
          do u think?What do u think?What do u think?What do u think?What do u
          think?What do u think?What do u think?What do u think?What do u
          think?What do u think?What do u think?What do u think?What do u
          think?What do u think?What do u think?What do u think?What do u
          think?What do u think?What do u think?What do u think?What do u
          think?What do u think?What do u think?What do u think?What do u
          think?What do u think?What do u think?
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CvSheet
