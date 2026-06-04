'use client'

import { useQuoteModal } from './QuoteModalProvider'
import { DynamicFormField } from '@/lib/gravity-forms/contactform'
import QuoteForm from './QuoteForm'

interface QuoteFormContextBridgeProps {
  fields: DynamicFormField[]
  formId?: string
}

export default function QuoteFormContextBridge({ fields, formId }: QuoteFormContextBridgeProps) {
  const { variant, prefilledService } = useQuoteModal()

  return (
    <QuoteForm
      fields={fields}
      formId={formId}
      variant={variant}
      prefilledService={prefilledService}
    />
  )
}
