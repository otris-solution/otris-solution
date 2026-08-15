import { useEffect, useState } from 'react'
import MobileNav from '../common/MobileNav'
import { navigationItems } from '../../config/site'

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const close = () => setIsOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          className="brand"
          href="#hero"
          aria-label="OTRIS — Operating Theatre Referral Interactive Integrated System"
        >
          <span className="brand__text">
            <strong>OTRIS</strong>
            <small>
              OPERATING THEATRE REFERRAL
              <br />
              INTERACTIVE INTEGRATED SYSTEM
            </small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileNav items={navigationItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  )
}

export default SiteHeader
