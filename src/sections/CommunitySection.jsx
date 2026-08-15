import SectionShell from '../components/common/SectionShell'
import { homepageContent } from '../data/homepage'
import { siteConfig } from '../config/site'

function CommunitySection() {
  const { community } = homepageContent

  return (
    <SectionShell
      id={siteConfig.sectionIds.community}
      eyebrow={community.eyebrow}
      title={community.title}
      intro={community.intro}
      className="page-section--last"
    >
      <div className="card-grid card-grid--three">
        {community.prompts.map((prompt) => (
          <article key={prompt} className="info-card">
            <h3>Next conversation</h3>
            <p>{prompt}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default CommunitySection
