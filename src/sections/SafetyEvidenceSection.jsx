import SectionShell from '../components/common/SectionShell'
import { homepageContent } from '../data/homepage'
import { siteConfig } from '../config/site'

function SafetyEvidenceSection() {
  const { safetyEvidence } = homepageContent

  return (
    <SectionShell
      id={siteConfig.sectionIds.safetyEvidence}
      eyebrow={safetyEvidence.eyebrow}
      title={safetyEvidence.title}
      intro={safetyEvidence.intro}
    >
      <div className="card-grid card-grid--three">
        {safetyEvidence.points.map((point) => (
          <article key={point} className="info-card">
            <h3>Bounded claim</h3>
            <p>{point}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default SafetyEvidenceSection
