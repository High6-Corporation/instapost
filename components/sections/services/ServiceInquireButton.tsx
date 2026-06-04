'use client'

import Button from '@/components/ui/Button'
import { useQuoteModal } from '@/components/sections/quote/QuoteModalProvider'

interface ServiceInquireButtonProps {
  serviceName: string
  text: string
  variant?: 'primary' | 'secondary' | 'white'
}

export default function ServiceInquireButton({ serviceName, text, variant = 'primary' }: ServiceInquireButtonProps) {
  const { openQuoteModal } = useQuoteModal()

  return (
    <Button
      variant={variant}
      onClick={() => openQuoteModal({ variant: 'service', prefilledService: serviceName })}
    >
      {text}
    </Button>
  )
}
