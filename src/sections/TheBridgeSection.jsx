import PlaceholderImage from '../components/common/PlaceholderImage'
import SectionShell from '../components/common/SectionShell'
import { homepageContent } from '../data/homepage'
import { siteConfig } from '../config/site'

function TheBridgeSection() {
  const { theBridge } = homepageContent

  return (
    <SectionShell
      id={siteConfig.sectionIds.theBridge}
      eyebrow={theBridge.eyebrow}
      title={theBridge.title}
      intro={theBridge.intro}
      className="page-section--tinted"
    >
      <div className="split-section">
        <div>
          <ul className="detail-list">
            {theBridge.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <PlaceholderImage title={theBridge.image.title} note={theBridge.image.note} />
      </div>
    </SectionShell>
  )
}

export default TheBridgeSection
