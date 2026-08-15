import SectionShell from '../components/common/SectionShell'
import { homepageContent } from '../data/homepage'
import { siteConfig } from '../config/site'

function DocumentationSection() {
  const { documentation } = homepageContent

  return (
    <SectionShell
      id={siteConfig.sectionIds.documentation}
      eyebrow={documentation.eyebrow}
      title={documentation.title}
      intro={documentation.intro}
    >
      <div className="card-grid card-grid--two">
        {documentation.items.map((item) => (
          <article key={item} className="info-card">
            <h3>{item}</h3>
            <p>Document the boundary clearly so implementation details stay useful without pretending to redefine architecture.</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default DocumentationSection
