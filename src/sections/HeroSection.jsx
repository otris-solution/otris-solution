import { homepageContent } from '../data/homepage'
import { siteConfig } from '../config/site'

function HeroSection() {
  const { hero } = homepageContent

  return (
    <section id={siteConfig.sectionIds.hero} className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-statement">
            <span>{hero.statementLead}</span>
            <span className="hero-statement__accent">{hero.statementAccent}</span>
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-intro">{hero.intro}</p>
          <div className="hero-actions">
            <a className="button button--primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="button button--secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <ul className="hero-highlights" aria-label="Homepage highlights">
            {hero.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="hero-founder-line">{hero.philosophySupport}</p>
        </div>

        <figure className="hero-media card-surface">
          <img src={hero.image.src} alt={hero.image.alt} />
          <figcaption>{hero.image.caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default HeroSection
