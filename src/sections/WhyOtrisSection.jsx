import SectionShell from '../components/common/SectionShell'
import { homepageContent } from '../data/homepage'
import { siteConfig } from '../config/site'

function WhyOtrisSection() {
  const { whyOtris } = homepageContent

  return (
    <SectionShell
      id={siteConfig.sectionIds.whyOtris}
      eyebrow={whyOtris.eyebrow}
      title={whyOtris.title}
      intro={whyOtris.intro}
    >
      <div className="card-grid card-grid--three">
        {whyOtris.pillars.map((pillar) => (
          <article key={pillar.title} className="info-card">
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default WhyOtrisSection
