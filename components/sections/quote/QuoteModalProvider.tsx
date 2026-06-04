'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export type QuoteModalVariant = 'quote' | 'service'

interface QuoteModalContextType {
  openQuoteModal: (options?: { variant?: QuoteModalVariant; prefilledService?: string }) => void
  closeQuoteModal: () => void
  isQuoteModalOpen: boolean
  variant: QuoteModalVariant
  prefilledService: string
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
  isQuoteModalOpen: false,
  variant: 'quote',
  prefilledService: '',
})

export function useQuoteModal() {
  return useContext(QuoteModalContext)
}

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [variant, setVariant] = useState<QuoteModalVariant>('quote')
  const [prefilledService, setPrefilledService] = useState('')

  const openQuoteModal = useCallback((options?: { variant?: QuoteModalVariant; prefilledService?: string }) => {
    setVariant(options?.variant ?? 'quote')
    setPrefilledService(options?.prefilledService ?? '')
    setIsOpen(true)
  }, [])

  const closeQuoteModal = useCallback(() => {
    setIsOpen(false)
    setPrefilledService('')
    setVariant('quote')
  }, [])

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal, isQuoteModalOpen: isOpen, variant, prefilledService }}>
      {children}
    </QuoteModalContext.Provider>
  )
}
