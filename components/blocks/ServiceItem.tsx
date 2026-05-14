import Image from 'next/image'

interface ServiceItemProps {
  icon: string
  title: string
  description: string
  className?: string
}

export default function ServiceItem({ icon, title, description, className = '' }: ServiceItemProps) {
  return (
    <div className={`flex gap-4 md:gap-[20px] lg:gap-[29px] items-center ${className}`}>
      {/* Icon Box */}
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-[16px] bg-[#EB0016] border-2 border-secondary overflow-hidden flex-shrink-0 relative">
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-[8px] flex-1">
        <h3 className="heading-3">
          {title}
        </h3>
        <p className="body-md text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  )
}
