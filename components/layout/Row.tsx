interface RowProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Row({ children, className = '', style }: RowProps) {
  return (
    <div className={`mx-auto w-[90%] max-w-[1292px] ${className}`} style={style}>
      {children}
    </div>
  )
}
