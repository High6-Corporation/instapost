'use client'

import { cn } from '@/lib/cn'
import Image from 'next/image'
import { useState } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white'
  children: React.ReactNode
  className?: string
  showArrow?: boolean
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className,
  showArrow = true,
  ...props 
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const baseClasses = 'font-sans font-semibold text-[18px] leading-[21px] px-6 py-4 rounded-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-[7px] whitespace-nowrap max-md:whitespace-normal max-md:text-center max-md:px-4 max-md:py-3 max-md:text-[16px] max-md:inline-block'
  
  const variantClasses = {
    primary: 'bg-primary text-neutral-0 shadow-[0px_0px_7px_rgba(0,0,0,0.16)] hover:bg-secondary',
    secondary: 'bg-secondary text-neutral-0 shadow-[0px_0px_7px_rgba(0,0,0,0.16)] hover:bg-primary',
    white: 'bg-white text-primary shadow-[0px_0px_7px_rgba(0,0,0,0.09)] hover:bg-secondary hover:text-neutral-0',
  }

  const getArrowIcon = () => {
    if (variant === 'white') {
      return isHovered ? '/icons/arrow-white-btn.svg' : '/icons/arrow-red-btn.svg'
    }
    return '/icons/arrow-white-btn.svg'
  }

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="inline">
        {children}
      </span>
      {showArrow && (
        <span className="relative inline-block w-5 h-5 shrink-0 align-middle ml-1">
          <Image
            src={getArrowIcon()}
            alt="Arrow icon"
            fill
            className="object-contain transition-all duration-200"
          />
        </span>
      )}
    </button>
  )
}
