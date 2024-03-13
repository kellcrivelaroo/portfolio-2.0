import Image, { StaticImageData } from 'next/image'

interface ProjectImageProps {
  image1: StaticImageData
  image2?: StaticImageData
}

const ProjectImage = ({ image1, image2 }: ProjectImageProps) => {
  if (!image2)
    return (
      <div className="flex h-[55vw] items-center justify-center p-6 lg:h-[440px] lg:w-[510px]">
        <Image
          src={image1}
          alt=""
          height={360}
          quality={98}
          className="rounded-sm border border-foreground/5 shadow-lg shadow-foreground/10"
        />
      </div>
    )

  return (
    <div className="relative h-[55vw] w-full p-4 lg:h-[440px] lg:w-[510px]">
      <Image
        src={image2}
        alt=""
        height={280}
        quality={98}
        className="absolute right-0 top-0 max-w-[80%] rounded-sm border border-foreground/5 shadow-lg shadow-foreground/5"
      />
      <Image
        src={image1}
        alt=""
        height={280}
        quality={98}
        className="absolute bottom-0 left-0 max-w-[80%] rounded-sm border border-foreground/5 shadow-lg shadow-foreground/5"
      />
    </div>
  )
}

export default ProjectImage
