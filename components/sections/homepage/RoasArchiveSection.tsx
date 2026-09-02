import Section from '@/components/layout/Section'
import Row from '@/components/layout/Row'

const clientResults = [
  {
    client: 'ABS-CBN',
    category: 'national media campaign',
    metric: '39.20×',
    label: 'RETURN ON AD SPEND',
  },
  {
    client: 'Dermcare',
    category: 'beauty & personal care',
    metric: '16.51×',
    label: 'RETURN ON AD SPEND',
  },
  {
    client: 'Onesimus',
    category: 'heritage menswear revival',
    metric: '+36%',
    label: 'IN-STORE SALES',
  },
]

export function RoasArchiveSection() {
  return (
    <Section className="bg-bg-secondary py-[40px] md:py-[60px] lg:py-[80px] my-[40px] md:my-[60px]">
      <Row className="!max-w-[1270px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-[24px] md:mb-[40px]">
          <span className="heading-4 font-bold max-md:text-center tracking-[2px] text-primary uppercase">
            From the ROAS Archive
          </span>
          <span className="heading-4 font-bold max-md:text-center tracking-[2px] text-primary uppercase">
            Documented Client Results
          </span>
        </div>

        {/* Separator */}
        <div className="border-t border-dotted border-primary/40 mb-[24px] md:mb-[32px]" />

        {/* Client Rows */}
        <div className="flex flex-col gap-[20px] md:gap-[24px] mb-[32px] md:mb-[40px]">
          {clientResults.map((result, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                {/* Left: Client name + category */}
                <div className="flex items-baseline gap-3">
                  <h3 className="heading-3 font-semibold text-text-primary">
                    {result.client}
                  </h3>
                  <span className="body-sm text-text-secondary">
                    {result.category}
                  </span>
                </div>

                {/* Dotted connector (desktop only) */}
                <div className="hidden md:block flex-1 mx-4 border-b border-dotted border-primary/40" />

                {/* Right: Metric + label */}
                <div className="flex flex-col items-end gap-1">
                  <span className="heading-2 font-bold text-primary">
                    {result.metric}
                  </span>
                  <span className="caption tracking-[1px] text-text-primary uppercase">
                    {result.label}
                  </span>
                </div>
              </div>

              {/* Row separator */}
              {index < clientResults.length - 1 && (
                <div className="border-t border-dotted border-primary/30 mt-[20px] md:mt-[24px]" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="border-t border-dotted border-primary/40 pt-[24px]">
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <span className="body-md text-text-primary">
              100+ Filipino brands scaled
            </span>
            <span className="body-md text-text-primary">
              Client retention above 95%
            </span>
          </div>
        </div>
      </Row>
    </Section>
  )
}
