import PlaceholderImage from '../components/common/PlaceholderImage'
import SectionShell from '../components/common/SectionShell'
import { homepageContent } from '../data/homepage'
import { siteConfig } from '../config/site'

function HumanExpertiseSection() {
  const { humanExpertise } = homepageContent

  return (
    <SectionShell
      id={siteConfig.sectionIds.humanExpertise}
      eyebrow={humanExpertise.eyebrow}
      title={humanExpertise.title}
      intro={humanExpertise.intro}
    >
      <div className="split-section">
        <div>
          <ul className="detail-list">
            {humanExpertise.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <PlaceholderImage title={humanExpertise.image.title} note={humanExpertise.image.note} />
      </div>
    </SectionShell>
  )
}

export default HumanExpertiseSection
