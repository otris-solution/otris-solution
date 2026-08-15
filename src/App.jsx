import SiteHeader from './components/layout/SiteHeader'
import SiteFooter from './components/layout/SiteFooter'
import HeroSection from './sections/HeroSection'
import WhyOtrisSection from './sections/WhyOtrisSection'
import HumanExpertiseSection from './sections/HumanExpertiseSection'
import TheBridgeSection from './sections/TheBridgeSection'
import ArchitectureSection from './sections/ArchitectureSection'
import ClinicalWallSection from './sections/ClinicalWallSection'
import OpenSourceSection from './sections/OpenSourceSection'
import PartOfOtrisSection from './sections/PartOfOtrisSection'
import SafetyEvidenceSection from './sections/SafetyEvidenceSection'
import DocumentationSection from './sections/DocumentationSection'
import CommunitySection from './sections/CommunitySection'

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <WhyOtrisSection />
        <HumanExpertiseSection />
        <TheBridgeSection />
        <ArchitectureSection />
        <ClinicalWallSection />
        <OpenSourceSection />
        <PartOfOtrisSection />
        <SafetyEvidenceSection />
        <DocumentationSection />
        <CommunitySection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
