interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  style?: React.CSSProperties
}

export default function Section({ children, className = '', id, style }: SectionProps) {
  return (
    <section id={id} className={`w-full ${className}`} style={style}>
      {children}
    </section>
  )
}
