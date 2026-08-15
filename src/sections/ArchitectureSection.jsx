import ArchitectureFlow from '../components/architecture/ArchitectureFlow'
import NormalizationFlow from '../components/architecture/NormalizationFlow'
import SectionShell from '../components/common/SectionShell'
import { homepageContent } from '../data/homepage'
import { siteConfig } from '../config/site'

function ArchitectureSection() {
  const { architecture } = homepageContent

  return (
    <SectionShell
      id={siteConfig.sectionIds.architecture}
      eyebrow={architecture.eyebrow}
      title={architecture.title}
      intro={architecture.intro}
    >
      <div className="architecture-grid">
        <ArchitectureFlow steps={architecture.primaryFlow} note={architecture.complianceNote} />
        <NormalizationFlow
          steps={architecture.secondaryFlow}
          boundaryLabel={architecture.boundaryLabel}
        />
      </div>
    </SectionShell>
  )
}

export default ArchitectureSection
