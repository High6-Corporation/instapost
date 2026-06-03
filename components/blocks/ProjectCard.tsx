import Image from 'next/image'

interface ProjectCardProps {
  imageSrc: string
  alt: string
  backgroundColor: string
  className?: string
}

export default function ProjectCard({ imageSrc, alt, backgroundColor, className }: ProjectCardProps) {
  return (
    <div 
      className={`w-full aspect-[413/263] rounded-[24px] overflow-hidden relative cursor-default ${className || ''}`}
      style={{ backgroundColor }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="relative w-[60%] h-[80%] transition-transform duration-300 hover:scale-110">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 413px"
          />
        </div>
      </div>
    </div>
  )
}
