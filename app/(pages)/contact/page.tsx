'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SubpageBanner from '@/components/shared/SubpageBanner'
import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import { submitContactForm } from '@/lib/contact-form'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s+]*$/
    return phoneRegex.test(phone)
  }

  const validateForm = (formData: FormData): boolean => {
    const errors: Record<string, string> = {}
    
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string

    // Validate email
    if (!email.includes('@')) {
      errors.email = 'Email must contain @ symbol'
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address (e.g., name@example.com)'
    }

    // Validate phone
    if (!validatePhone(phone)) {
      errors.phone = 'Phone can only contain numbers, spaces, and + sign'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setFieldErrors({})

    const formData = new FormData(e.currentTarget)
    
    // Validate form
    if (!validateForm(formData)) {
      setIsSubmitting(false)
      return
    }
    
    try {
      const response = await submitContactForm({
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        interest: formData.get('interest') as string,
        message: formData.get('message') as string,
      })

      if (response.is_valid) {
        // Redirect to thank you page immediately
        window.location.href = '/thank-you'
      } else {
        // Show validation errors from server
        if (response.validation_messages) {
          const serverErrors: Record<string, string> = {}
          Object.entries(response.validation_messages).forEach(([key, value]) => {
            serverErrors[key] = value as string
          })
          setFieldErrors(serverErrors)
        }
        setError(response.confirmation_message || 'Form submission failed. Please check your inputs.')
        setIsSubmitting(false)
      }
    } catch (err) {
      console.error('Submission error:', err)
      setError('Failed to submit form. Please try again.')
      setIsSubmitting(false)
    }
  }
  return (
    <main className="relative min-h-screen">
      {/* Header */}
      <Header variant="sticky" />

      {/* Subpage Banner */}
      <SubpageBanner title="Contact Us" />

      {/* Main Content */}
      <Section className="py-[24px] md:py-[40px] lg:py-[70px]">
        <Row className="!max-w-[1281px] flex flex-col lg:flex-row gap-8 md:gap-[40px] lg:gap-[60px]">
            {/* Left Column - Contact Info */}
            <div className="flex flex-col gap-4 md:gap-[30px] w-full lg:w-auto">
              {/* Heading & Description */}
              <div className="flex flex-col gap-2 md:gap-6 lg:gap-[30px]">
                <h2 className="heading-2 text-neutral-900">
                  Get in Touch!
                </h2>
                <p className="body-md text-neutral-500">
                  Whether you have a product inquiry, need customer support, or want to explore partnership opportunities, our team is ready to assist you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-[15px]">
                {/* Location */}
                <a href="https://maps.app.goo.gl/bhcRGHEFYX8nXCZS9" target="_blank" rel="noopener noreferrer" className="flex gap-[7px] items-center group">
                  <div className="relative w-[24px] h-[24px] shrink-0">
                    <Image
                      src="/icons/location-icon.svg"
                      alt="Location"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <p className="body-md text-neutral-500 group-hover:text-primary transition-colors">
                    12 Bldg. Sampaguita St., Sampaguita Village Brgy. Malanday, Marikina City, Philippines, 1805
                  </p>
                </a>

                {/* Phone */}
                <a href="tel:09454421057" className="flex gap-[7px] items-center group">
                  <div className="relative w-[24px] h-[24px] shrink-0">
                    <Image
                      src="/icons/contact-no-icon.svg"
                      alt="Phone"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <p className="body-md text-neutral-500 group-hover:text-primary transition-colors">
                    09454421057
                  </p>
                </a>

                {/* Email */}
                <a href="mailto:inquire.instapost@gmail.com" className="flex gap-[7px] items-center group">
                  <div className="relative w-[24px] h-[24px] shrink-0">
                    <Image
                      src="/icons/email-icon.svg"
                      alt="Email"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <p className="body-md text-neutral-500 group-hover:text-primary transition-colors">
                    inquire.instapost@gmail.com
                  </p>
                </a>
              </div>

              {/* Social Media */}
              <div className="flex flex-col gap-[10px]">
                <h3 className="heading-3 font-medium text-neutral-900">
                  Follow Us
                </h3>
                <div className="flex gap-[13px]">
                  <a href="https://www.facebook.com/instapostph/" target="_blank" rel="noopener noreferrer" className="relative rounded-full w-[40px] h-[40px] bg-primary hover:bg-secondary hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-300">
                    <Image
                      src="/icons/fb-icon.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </a>
                  <a href="https://www.instagram.com/instapostph/" target="_blank" rel="noopener noreferrer" className="relative rounded-full w-[40px] h-[40px] bg-primary hover:bg-secondary hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-300">
                    <Image
                      src="/icons/ig-icon.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </a>
                  <a href="https://www.tiktok.com/@instapostph" target="_blank" rel="noopener noreferrer" className="relative rounded-full w-[40px] h-[40px] bg-primary hover:bg-secondary hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-300">
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

            {/* Right Column - Contact Form */}
            <div className="w-full lg:w-[630px] rounded-[24px] p-4 md:px-[30px] md:py-[44.5px]"
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(253,209,13,0.2) 0%, rgba(253,209,13,1) 100%)'
              }}
            >
              <form className="flex flex-col gap-4 md:gap-[20px]" onSubmit={handleSubmit}>
                {/* First Name & Last Name */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-[22px]">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name*"
                    required
                    className="w-full lg:w-[274px] h-[48px] px-[14px] bg-white border border-[rgba(0,0,0,0.1)] rounded-[10px] body-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name*"
                    required
                    className="w-full lg:w-[274px] h-[48px] px-[14px] bg-white border border-[rgba(0,0,0,0.1)] rounded-[10px] body-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Work Email */}
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email*"
                    required
                    className={`w-full h-[48px] px-[14px] bg-white border rounded-[10px] body-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary ${
                      fieldErrors.email ? 'border-red-500' : 'border-[rgba(0,0,0,0.1)]'
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-red-500 body-sm">{fieldErrors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    required
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement
                      target.value = target.value.replace(/[^\d\s+]/g, '')
                    }}
                    className={`w-full h-[48px] px-[14px] bg-white border rounded-[10px] body-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary ${
                      fieldErrors.phone ? 'border-red-500' : 'border-[rgba(0,0,0,0.1)]'
                    }`}
                  />
                  {fieldErrors.phone && (
                    <p className="text-red-500 body-sm">{fieldErrors.phone}</p>
                  )}
                </div>

                {/* Interest */}
                <input
                  type="text"
                  name="interest"
                  placeholder="I am interested in:*"
                  required
                  className="w-full h-[48px] px-[14px] bg-white border border-[rgba(0,0,0,0.1)] rounded-[10px] body-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                {/* Message Textarea */}
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className="w-full h-[201px] px-[14px] py-[14px] bg-white border border-[rgba(0,0,0,0.1)] rounded-[10px] body-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />

                {/* Error Message */}
                {error && (
                  <p className="text-error body-md text-red-500">{error}</p>
                )}

                {/* Submit Button */}
                <div className="flex w-full justify-end">
                <Button 
                  variant="primary" 
                  showArrow={true} 
                  className="w-full md:w-auto mt-[10px] w-max hover:!bg-neutral-500"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
                </div>
              </form>
            </div>
        </Row>
      </Section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
