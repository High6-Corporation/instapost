'use client'

import { useConsent } from './ConsentProvider'
import { consentConfig } from '@/lib/consent/consent-config'
import { COLORS, TEXT, LAYOUT, POSITION_CLASSES } from './consent-theme'

export function CookieConsentBanner() {
  const { hasChosen, acceptAll, rejectAll, openSettings } = useConsent()

  if (hasChosen) return null

  return (
    <div className={`${COLORS.bannerBg} ${POSITION_CLASSES[LAYOUT.bannerPosition]} rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden mr-5 mb-5`}>
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: COLORS.primary }} />
      <div className={LAYOUT.bannerPadding}>
        <div className={`mx-auto flex ${LAYOUT.bannerMaxWidth} flex-col gap-4`}>
        {/* Icon + Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${COLORS.primary}20` }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" style={{ color: COLORS.primary }}>
              <path d="M12 2a10 10 0 1 0 10 10 1 1 0 0 0-1-1h-.5a2.5 2.5 0 0 1-2.5-2.5V8a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2V3.5A1.5 1.5 0 0 0 12.5 2H12Zm-1.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-3 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </div>
          <h2 className="text-base font-semibold" style={{ color: COLORS.textDark }}>
            {TEXT.bannerTitle}
          </h2>
        </div>

        {/* Description */}
        <p className={`text-sm ${COLORS.textBody}`}>
          {TEXT.bannerDescription}
        </p>

        {/* Policy Links */}
        <div className="flex gap-3 text-sm">
          <a href={consentConfig.privacyPolicyUrl} className="underline" style={{ color: COLORS.primary }}>
            {TEXT.privacyLinkLabel}
          </a>
          <a href={consentConfig.cookiePolicyUrl} className="underline" style={{ color: COLORS.primary }}>
            {TEXT.cookieLinkLabel}
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={acceptAll}
            className={`flex-1 px-4 py-2 text-sm font-medium text-white transition-colors ${LAYOUT.buttonBorderRadius}`}
            style={{ backgroundColor: COLORS.primary, border: '1px solid transparent' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = COLORS.primary; e.currentTarget.style.border = `1px solid ${COLORS.primary}` }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = COLORS.primary; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '1px solid transparent' }}
          >
            {TEXT.acceptButton}
          </button>

          <button
            type="button"
            onClick={rejectAll}
            className={`flex-1 border px-4 py-2 text-sm font-medium transition-colors ${LAYOUT.buttonBorderRadius}`}
            style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.primary; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.primary }}
          >
            {TEXT.rejectButton}
          </button>

          <button
            type="button"
            onClick={openSettings}
            className={`flex-1 border px-4 py-2 text-sm font-medium transition-colors ${LAYOUT.buttonBorderRadius}`}
            style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.primary; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.primary }}
          >
            {TEXT.customizeButton}
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}
