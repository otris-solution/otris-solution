import SectionShell from '../components/common/SectionShell'
import { homepageContent } from '../data/homepage'
import { openSourceProjects } from '../data/openSource'
import { siteConfig } from '../config/site'

function OpenSourceSection() {
  return (
    <SectionShell
      id={siteConfig.sectionIds.openSource}
      eyebrow="Open Source"
      title="Planned public building blocks should be visible before they are published."
      intro="Open source status is intentionally conservative here: these entries are planned, locally described, and not linked until founder-approved destinations exist."
    >
      <div className="card-grid card-grid--three">
        {openSourceProjects.map((project) => (
          <article key={project.name} className="info-card info-card--status">
            <p className="status-chip">{project.status}</p>
            <h3>{project.name}</h3>
            <p className="meta-line">{project.category}</p>
            <p>{project.description}</p>
            <p className="status-note">{project.url === null ? 'Link pending founder approval.' : project.url}</p>
          </article>
        ))}
      </div>
      <p className="section-footnote">{homepageContent.community.intro}</p>
    </SectionShell>
  )
}

export default OpenSourceSection
