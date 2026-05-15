'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'
import Row from './Row'

interface HeaderProps {
  variant?: 'default' | 'sticky';
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/coming-soon' },
  { label: 'Services', href: '/coming-soon' },
  { label: 'Industries', href: '/coming-soon' },
  { label: 'Packages', href: '/coming-soon' },
  { label: 'Contact', href: '/contact' },
]

export default function Header({ variant = 'default' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Default variant: scroll effect on any scroll
  // Sticky variant: only becomes sticky when original position is out of view
  useEffect(() => {
    const handleScroll = () => {
      if (variant === 'sticky') {
        if (!headerRef.current || !placeholderRef.current) return
        
        const placeholderRect = placeholderRef.current.getBoundingClientRect()
        
        // Check if the original header position is completely out of view
        if (placeholderRect.top <= 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      } else {
        // Default variant: trigger on any scroll
        setIsScrolled(window.scrollY > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [variant])

  return (
    <>
      {/* Placeholder for sticky variant - tracks scroll position */}
      {variant === 'sticky' && (
        <div ref={placeholderRef} className="h-[80px] lg:h-[130px] invisible pointer-events-none" />
      )}

      {/* Header */}
      <header 
        ref={headerRef}
        className={`w-full transition-all duration-300 z-50 ${
          variant === 'sticky'
            ? (isScrolled 
                ? 'fixed top-0 left-0 right-0 shadow-[0px_0px_7px_rgba(0,0,0,0.05)]' 
                : 'relative')
            : 'fixed top-0 left-0 right-0'
        } ${isScrolled ? 'shadow-[0px_0px_7px_rgba(0,0,0,0.05)]' : ''}`}
        style={isScrolled ? { backgroundColor: 'rgba(255, 255, 255, 1)' } : {}}
      >
        <Row>
          <div className="flex items-center justify-between">
            {/* Logo */}
            {/* Default variant: shrinks on mobile/tablet when scrolled, stays same on desktop */}
            {/* Sticky variant: only shrinks on desktop when sticky, NOT on mobile/tablet */}
            <Link href="/" className={`w-auto shrink-0 transition-all duration-300 ${
              variant === 'sticky'
                ? (isScrolled ? 'h-[80px] lg:h-[130px]' : 'h-[100px] lg:h-[130px]')
                : (isScrolled ? 'h-[80px] lg:h-[130px]' : 'h-[100px] lg:h-[130px]')
            }`}>
              <Image
                src="/logo/header-logo.png"
                alt="InstaPost Logo"
                fill
                className="object-contain !relative"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex rounded-lg bg-bg-primary max-w-[553px] w-full justify-center py-auto h-[43px] shadow-[0px_0px_7px_rgba(0,0,0,0.09)]">
              <ul className="flex items-center justify-center gap-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`label-md whitespace-nowrap transition-colors duration-200 hover:text-primary ${
                          isActive ? 'text-primary font-semibold' : 'text-text-primary'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link href="/coming-soon">
                <Button variant="primary" showArrow={false}>
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile/Tablet Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile/Tablet Dropdown Menu - Absolute Position with Animation */}
          <div 
            className={`lg:hidden absolute left-0 right-0 top-full z-50 transition-all duration-300 ease-out ${
              isMenuOpen 
                ? 'opacity-100 translate-y-0 visible' 
                : 'opacity-0 -translate-y-4 invisible'
            }`}
          >
            <Row>
              <div className="rounded-lg bg-bg-primary shadow-[0px_0px_7px_rgba(0,0,0,0.09)] overflow-hidden">
                <nav className="p-4 ">
                  <ul className="flex flex-col lg:gap-4">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                      return (
                        <li 
                          key={link.label}
                          className={`transition-all duration-300 ease-out ${
                            isMenuOpen 
                              ? 'opacity-100 translate-x-0' 
                              : 'opacity-0 -translate-x-4'
                          }`}
                          style={{ transitionDelay: `${index * 50 + 100}ms` }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block label-md whitespace-nowrap transition-colors duration-200 hover:text-primary lg:py-0 py-2 ${
                              isActive ? 'text-primary font-semibold' : 'text-text-primary'
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      )
                    })}
                    {/* CTA Button at the bottom */}
                    <li 
                      className={`pt-4 border-t border-border transition-all duration-300 ease-out ${
                        isMenuOpen 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${navLinks.length * 50 + 100}ms` }}
                    >
                      <Link href="/coming-soon">
                        <Button variant="primary" showArrow={false} className="w-full">
                          Get Started
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Row>
          </div>
        </Row>
      </header>
    </>
  )
}
