'use client'

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
      className="underline"
    >
      Cookie Settings
    </button>
  )
}
