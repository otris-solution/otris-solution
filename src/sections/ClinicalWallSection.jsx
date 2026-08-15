import SectionShell from '../components/common/SectionShell'
import AuthorizedViewsGrid from '../components/clinical-wall/AuthorizedViewsGrid'
import ClinicalWallFlow from '../components/clinical-wall/ClinicalWallFlow'
import ClinicalWallInteraction from '../components/clinical-wall/ClinicalWallInteraction'
import { homepageContent } from '../data/homepage'
import { siteConfig } from '../config/site'

function ClinicalWallSection() {
  const { clinicalWall } = homepageContent

  return (
    <SectionShell
      id={siteConfig.sectionIds.clinicalWall}
      eyebrow={clinicalWall.eyebrow}
      title={clinicalWall.title}
      intro={clinicalWall.intro}
      className="page-section--tinted"
    >
      <div className="clinical-wall-stack">
        <div className="architecture-grid">
          <ClinicalWallFlow steps={clinicalWall.flow} privacyLine={clinicalWall.privacyLine} />
          <ClinicalWallInteraction steps={clinicalWall.interactionSteps} />
        </div>

        <div className="card-grid card-grid--three">
          {clinicalWall.values.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <AuthorizedViewsGrid views={clinicalWall.views} />
      </div>
    </SectionShell>
  )
}

export default ClinicalWallSection
