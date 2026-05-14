import Image from 'next/image'

interface ProjectCardProps {
  imageSrc: string
  alt: string
  backgroundColor: string
  imageWidth?: number
  imageHeight?: number
  className?: string
}

export default function ProjectCard({ imageSrc, alt, backgroundColor, imageWidth = 220, imageHeight = 200, className }: ProjectCardProps) {
  return (
    <div 
      className={`w-full h-[263px] rounded-[24px] overflow-hidden relative flex items-center justify-center cursor-default ${className || ''}`}
      style={{ backgroundColor }}
    >
      <div 
        className="relative transition-transform duration-300 hover:scale-[1.1]"
        style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
