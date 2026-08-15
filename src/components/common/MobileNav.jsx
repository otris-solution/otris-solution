function MobileNav({ items, isOpen, onClose }) {
  return (
    <div className={`mobile-nav${isOpen ? ' is-open' : ''}`} id="mobile-navigation" hidden={!isOpen}>
      <nav aria-label="Mobile navigation">
        <ul className="mobile-nav__list">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={onClose}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav
