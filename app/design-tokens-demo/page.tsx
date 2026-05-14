import Button from '@/components/ui/Button'

export default function DesignTokensDemo() {
  return (
    <main className="bg-bg-primary">
      {/* Hero Section */}
      <section className="bg-bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-heading-1">
            Design Tokens Demo
          </h1>
          <p className="text-body-lg text-text-secondary mt-4">
            This page demonstrates the design token system with Raleway font and your custom colors.
          </p>
          <div className="mt-8 flex gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="white">White Button</Button>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-heading-2">Typography Scale</h2>
          
          <div className="mt-8 space-y-8">
            <div>
              <h1 className="text-heading-1">Heading 1 - 76px/60px/36px</h1>
              <span className="text-caption text-text-secondary mt-2 block">
                Desktop / Tablet / Mobile
              </span>
            </div>
            
            <div>
              <h2 className="text-heading-2">Heading 2 - 48px/36px/24px</h2>
              <span className="text-caption text-text-secondary mt-2 block">
                Desktop / Tablet / Mobile
              </span>
            </div>
            
            <div>
              <h3 className="text-heading-3">Heading 3 - 24px/20px/18px</h3>
              <span className="text-caption text-text-secondary mt-2 block">
                Desktop / Tablet / Mobile
              </span>
            </div>
            
            <div>
              <p className="text-body-lg">
                Body 1 (Large): 22px/18px/16px - Used for important content and introductions
              </p>
            </div>
            
            <div>
              <p className="text-body-md">
                Body 2 (Medium): 18px/16px/14px - Default body text for general content
              </p>
            </div>
            
            <div>
              <p className="text-body-sm">
                Body 3 (Small): 16px/16px/14px - Secondary content and descriptions
              </p>
            </div>
            
            <div>
              <p className="text-body-xs">
                Body 4 (XS): 14px - Fine print and legal text
              </p>
            </div>
            
            <div>
              <span className="text-caption">CAPTION - 12px Semibold</span>
            </div>
            
            <div>
              <label className="text-label-md text-text-secondary">
                Label MD - 16px Medium (Menu/Footer)
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="bg-bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-heading-2">Color Palette</h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary Colors */}
            <div>
              <h3 className="text-heading-3">Primary Colors</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-primary rounded-lg"></div>
                  <div>
                    <span className="text-label-md">Primary</span>
                    <p className="text-body-xs text-text-secondary">#D01F25</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-primary-hover rounded-lg"></div>
                  <div>
                    <span className="text-label-md">Primary Hover</span>
                    <p className="text-body-xs text-text-secondary">#B81A20</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-primary-active rounded-lg"></div>
                  <div>
                    <span className="text-label-md">Primary Active</span>
                    <p className="text-body-xs text-text-secondary">#A0161B</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Colors */}
            <div>
              <h3 className="text-heading-3">Secondary Colors</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-secondary rounded-lg"></div>
                  <div>
                    <span className="text-label-md">Secondary</span>
                    <p className="text-body-xs text-text-secondary">#FDD10D</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-secondary-hover rounded-lg"></div>
                  <div>
                    <span className="text-label-md">Secondary Hover</span>
                    <p className="text-body-xs text-text-secondary">#E6BD0B</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-secondary-active rounded-lg"></div>
                  <div>
                    <span className="text-label-md">Secondary Active</span>
                    <p className="text-body-xs text-text-secondary">#CCA80A</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div>
              <h3 className="text-heading-3">Neutral Colors</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-neutral-0 border border-border rounded-lg"></div>
                  <div>
                    <span className="text-label-md">Neutral 0</span>
                    <p className="text-body-xs text-text-secondary">#FFFFFF</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-neutral-500 rounded-lg"></div>
                  <div>
                    <span className="text-label-md">Neutral 500</span>
                    <p className="text-body-xs text-text-secondary">#616161</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-neutral-900 rounded-lg"></div>
                  <div>
                    <span className="text-label-md">Neutral 900</span>
                    <p className="text-body-xs text-text-secondary">#000000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div>
              <h3 className="text-heading-3">Usage Examples</h3>
              <div className="mt-4 space-y-4">
                <div className="p-4 bg-bg-primary border border-border rounded-lg">
                  <span className="text-label-md">Primary Background</span>
                </div>
                <div className="p-4 bg-bg-secondary border border-border rounded-lg">
                  <span className="text-label-md">Secondary Background</span>
                </div>
                <div className="p-4 bg-primary rounded-lg">
                  <span className="text-label-md text-text-inverse">Inverse Text on Primary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Font Family Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-heading-2">Font Family</h2>
          <div className="mt-8 p-8 bg-bg-secondary rounded-lg">
            <p className="text-body-lg font-primary">
              Primary Font: <strong>Raleway</strong>
            </p>
            <p className="text-body-md mt-4 font-primary">
              The quick brown fox jumps over the lazy dog. This is how Raleway looks in body text.
            </p>
            <span className="text-caption mt-4 block font-primary">
              All text uses the Raleway font family from Google Fonts
            </span>
          </div>
        </div>
      </section>

      {/* Status Colors */}
      <section className="bg-bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-heading-2">Status Colors</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-success rounded-lg">
              <span className="text-label-md text-text-inverse">Success</span>
              <p className="text-body-xs text-text-inverse mt-2">#10B981</p>
            </div>
            <div className="p-6 bg-warning rounded-lg">
              <span className="text-label-md text-text-inverse">Warning</span>
              <p className="text-body-xs text-text-inverse mt-2">#F59E0B</p>
            </div>
            <div className="p-6 bg-error rounded-lg">
              <span className="text-label-md text-text-inverse">Error</span>
              <p className="text-body-xs text-text-inverse mt-2">#EF4444</p>
            </div>
            <div className="p-6 bg-info rounded-lg">
              <span className="text-label-md text-text-inverse">Info</span>
              <p className="text-body-xs text-text-inverse mt-2">#3B82F6</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
