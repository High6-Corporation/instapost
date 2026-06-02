'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Row from './Row'
import { CookieSettingsLink } from '@/components/consent/CookieSettingsLink'

export default function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative w-full overflow-hidden pb-[40px] md:pb-[60px] pt-[40px] lg:pt-[67px] lg:pb-[80px]">
      {/* SVG Background */}
<div className="absolute inset-0 z-10 flex flex-col overflow-hidden">
  {/* 1. Ang Curve Header (Fixed Height para hindi ma-stretch ang alon) */}
  <div className="w-full shrink-0">
    <svg 
      viewBox="0 0 1440 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[100px] lg:h-[150px]"
      preserveAspectRatio="none" 
    >
      <path 
        /* 
           - Start at 0, 67.68
           - End at 1440, 67.68 (Pantay na sila ngayon)
           - Inadjust ang curve points para maging smooth ang transition
        */
        d="M130 37.6868C650 -100 1000 200 1440 47.6868V180H0V67.6868Z" 
        fill="#FDD10D" 
      />
    </svg>
  </div>

  {/* 2. Ang Background Body (Responsive Height) */}
  {/* Kakainin nito ang natitirang space base sa haba ng content mo sa image_64f17d.png */}
  <div className="w-full flex-grow bg-[#FDD10D]" />
</div>

      {/* Content */}
      <Row className="relative z-20 !max-w-[1111px] flex flex-col gap-[45px]">
        {/* 1st Column - Logo, Menu, Contact & Social Icons */}
          {/* Logo + Menu (same parent) */}
          <div className="flex flex-col lg:flex-row gap-[24px] justify-between w-full items-center">
            {/* Logo */}
            <div className="w-[220px] lg:w-[295px] shrink-0">
              <a href="/coming-soon">
                <Image
                  src="/logo/header-logo.png"
                  alt="Instapost logo"
                  width={295}
                  height={80}
                  className="max-lg:h-[180px] object-none lg:object-contain"
                />
              </a>
            </div>

            {/* Menu */}
            <div className="flex max-md:flex-col max-md:items-center max-md:text-center gap-[24px] md:gap-[80px]">
              {/* Column 1 */}
              <div className="flex flex-col gap-[24px] md:gap-[32px]">
                <a href="/" className={`label-md font-medium transition-colors ${
                  pathname === '/' ? 'text-primary font-semibold' : 'text-neutral-900 hover:text-primary'
                }`}>
                  Home
                </a>
                <a href="/about" className={`label-md font-medium transition-colors ${
                  pathname === '/about' ? 'text-primary font-semibold' : 'text-neutral-900 hover:text-primary'
                }`}>
                  About
                </a>
                <a href="/services" className={`label-md font-medium transition-colors ${
                  pathname === '/services' || pathname.startsWith('/services') || pathname.startsWith('/agency') ? 'text-primary font-semibold' : 'text-neutral-900 hover:text-primary'
                }`}>
                  Services
                </a>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-[24px] md:gap-[32px]">
                <a href="/industries" className={`label-md font-medium transition-colors ${
                  pathname === '/industries' || pathname.startsWith('/industries') ? 'text-primary font-semibold' : 'text-neutral-900 hover:text-primary'
                }`}>
                  Industries
                </a>
                <a href="/packages" className={`label-md font-medium transition-colors ${
                  pathname === '/packages' || pathname.startsWith('/packages') ? 'text-primary font-semibold' : 'text-neutral-900 hover:text-primary'
                }`}>
                  Packages
                </a>
                <a href="/contact" className={`label-md font-medium transition-colors ${
                  pathname === '/contact' ? 'text-primary font-semibold' : 'text-neutral-900 hover:text-primary'
                }`}>
                  Contact
                </a>
              </div>
            </div>
                      {/* Contact + Social Icons (same parent, 2 columns) */}
          <div className="flex flex-col lg:flex-col gap-[24px] lg:gap-[32px]">
            {/* 1st Column - Contact Info */}
            <div className="flex flex-col gap-[24px] max-lg:items-center">
              {/* Phone */}
              <a href="tel:09454421057" className="flex items-center gap-2 lg:gap-[16px] group">
                <div className="relative w-[32px] h-[32px] shrink-0">
                  <Image
                    src="/icons/contact-no-icon.svg"
                    alt="Phone"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <p className="body-md max-md:!text-[16px] font-medium text-neutral-900 group-hover:text-primary transition-colors">
                  09454421057
                </p>
              </a>

              {/* Email */}
              <a href="mailto:inquire.instapost@gmail.com" className="flex items-center gap-2 lg:gap-[16px] group">
                <div className="relative w-[32px] h-[32px] shrink-0">
                  <Image
                    src="/icons/email-icon.svg"
                    alt="Email"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <p className="body-md max-md:!text-[16px] font-medium text-neutral-900 group-hover:text-primary transition-colors">
                  inquire.instapost@gmail.com
                </p>
              </a>
            </div>

            {/* 2nd Column - Social Icons */}
            <div className="flex gap-[13px] items-center max-lg:justify-center">
              <a href="https://www.facebook.com/instapostph/" target="_blank" rel="noopener noreferrer" className="relative rounded-full w-[40px] h-[40px] bg-primary hover:bg-secondary hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] flex items-center justify-center transition-opacity transition-all duration-300">
                <Image
                  src="/icons/fb-icon.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
              <a href="https://www.instagram.com/instapostph/" target="_blank" rel="noopener noreferrer" className="relative rounded-full w-[40px] h-[40px] bg-primary hover:bg-secondary hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] flex items-center justify-center transition-opacity transition-all duration-300">
                <Image
                  src="/icons/ig-icon.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
              <a href="https://www.tiktok.com/@instapostph" target="_blank" rel="noopener noreferrer" className="relative rounded-full w-[40px] h-[40px]  bg-primary hover:bg-secondary hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] flex items-center justify-center transition-opacity transition-all duration-300">
                <Image
                  src="/icons/tiktok-icon.svg"
                  alt="TikTok"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          </div>


        {/* 2nd Column - Copyright */}
          <div className="flex flex-col items-center gap-2">
            <p className="body-xs font-medium text-neutral-900 text-center">
              {currentYear} Copyright Instapost. All Rights Reserved.
            </p>
            <CookieSettingsLink />
          </div>
      </Row>
    </footer>
  )
}
