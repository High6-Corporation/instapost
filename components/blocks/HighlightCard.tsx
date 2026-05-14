interface HighlightCardProps {
  src: string
  alt?: string
  className?: string
}

export default function HighlightCard({ src, alt = 'Highlight', className }: HighlightCardProps) {
  return (
    <div className={`flex-shrink-0 lg:w-[280px] lg:h-[390px] md:w-[240px] md:h-[350px] w-[180px] h-[250px] rounded-[24px] overflow-hidden ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
