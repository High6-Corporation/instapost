interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <div className={`bg-[#fae9e9] p-[10px] rounded-[4px] mb-4 ${className || ''}`}>
      <p className="body-xs font-semibold text-primary">
        {children}
      </p>
    </div>
  )
}
