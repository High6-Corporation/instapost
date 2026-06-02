'use client'

import { useEffect, useState } from 'react'
import { useConsent } from './ConsentProvider'
import { consentConfig } from '@/lib/consent/consent-config'
import { COLORS, TEXT, LAYOUT } from './consent-theme'
import type { ConsentState } from '@/lib/consent/consent-types'

export function CookieSettingsModal() {
  const {
    consent,
    isSettingsOpen,
    closeSettings,
    saveConsent,
    acceptAll,
    rejectAll,
  } = useConsent()

  const [draft, setDraft] = useState<ConsentState>(consent)

  useEffect(() => {
    if (isSettingsOpen) {
      setDraft(consent)
    }
  }, [isSettingsOpen, consent])

  if (!isSettingsOpen) return null

  const updateDraft = (key: keyof ConsentState, value: boolean) => {
    if (key === 'necessary') return

    setDraft((current) => ({
      ...current,
      [key]: value,
    }))
  }

  const rows: Array<{
    key: keyof ConsentState
    title: string
    description: string
    examples?: string
    disabled?: boolean
  }> = [
    {
      key: 'necessary',
      title: consentConfig.categories.necessary.title,
      description: consentConfig.categories.necessary.description,
      examples: consentConfig.categories.necessary.examples,
      disabled: true,
    },
    {
      key: 'analytics',
      title: consentConfig.categories.analytics.title,
      description: consentConfig.categories.analytics.description,
      examples: consentConfig.categories.analytics.examples,
    },
    {
      key: 'marketing',
      title: consentConfig.categories.marketing.title,
      description: consentConfig.categories.marketing.description,
      examples: consentConfig.categories.marketing.examples,
    },
    {
      key: 'preferences',
      title: consentConfig.categories.preferences.title,
      description: consentConfig.categories.preferences.description,
      examples: consentConfig.categories.preferences.examples,
    },
    {
      key: 'embedded',
      title: consentConfig.categories.embedded.title,
      description: consentConfig.categories.embedded.description,
      examples: consentConfig.categories.embedded.examples,
    },
  ]

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
      <div className={`max-h-[90vh] w-full ${LAYOUT.modalMaxWidth} overflow-y-auto rounded-lg bg-white p-6 shadow-xl`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold" style={{ color: COLORS.textDark }}>
              {TEXT.modalTitle}
            </h2>

            <p className={`mt-1 text-sm ${COLORS.textBody}`}>
              {TEXT.modalDescription}
            </p>
          </div>

          <button type="button" onClick={closeSettings} className="text-sm" style={{ color: COLORS.primary }}>
            Close
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {rows.map((row) => (
            <div
              key={row.key}
              className="flex items-start justify-between gap-4 rounded-md border p-4"
            >
              <div>
                <h3 className="font-medium" style={{ color: COLORS.textDark }}>{row.title}</h3>

                <p className={`mt-1 text-sm ${COLORS.textBody}`}>
                  {row.description}
                </p>

                {row.examples && (
                  <p className={`mt-1 text-xs ${COLORS.textMuted}`}>
                    e.g. {row.examples}
                  </p>
                )}
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={draft[row.key]}
                  disabled={row.disabled}
                  onChange={(event) =>
                    updateDraft(row.key, event.target.checked)
                  }
                  className="h-4 w-4"
                  style={{ accentColor: COLORS.primary }}
                />

                {row.disabled ? 'Always on' : 'Allow'}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={rejectAll}
            className={`border px-4 py-2 text-sm font-medium ${LAYOUT.buttonBorderRadius}`}
            style={{ borderColor: COLORS.primary, color: COLORS.primary }}
          >
            {TEXT.rejectButton}
          </button>

          <button
            type="button"
            onClick={() =>
              saveConsent({
                ...draft,
                necessary: true,
              })
            }
            className={`border px-4 py-2 text-sm font-medium ${LAYOUT.buttonBorderRadius}`}
            style={{ borderColor: COLORS.primary, color: COLORS.primary }}
          >
            {TEXT.saveButton}
          </button>

          <button
            type="button"
            onClick={acceptAll}
            className={`px-4 py-2 text-sm font-medium text-white ${LAYOUT.buttonBorderRadius}`}
            style={{ backgroundColor: COLORS.primary }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.primaryHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
          >
            {TEXT.acceptButton}
          </button>
        </div>
      </div>
    </div>
  )
}
