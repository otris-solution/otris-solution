import SectionShell from '../components/common/SectionShell'
import { otrisFamilies } from '../data/partOfOtris'
import { siteConfig } from '../config/site'

function PartOfOtrisSection() {
  return (
    <SectionShell
      id={siteConfig.sectionIds.partOfOtris}
      eyebrow="Part of OTRIS"
      title="Family identity stays visible across the broader OTRIS system."
      intro="These families represent the broader OTRIS identity surface. Color supports recognition, but every card also states its code and purpose in text."
    >
      <div className="family-grid" role="list" aria-label="OTRIS family system">
        {otrisFamilies.map((family) => (
          <article key={family.code} className="family-card" role="listitem">
            <span className="family-card__accent" style={{ backgroundColor: family.color }} aria-hidden="true" />
            <p className="family-card__code">{family.code}</p>
            <h3>{family.name}</h3>
            <p>{family.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default PartOfOtrisSection
