function SectionShell({ id, eyebrow, title, intro, className = '', children }) {
  const classes = ['page-section', className].filter(Boolean).join(' ')

  return (
    <section id={id} className={classes} aria-labelledby={`${id}-title`}>
      <div className="container section-shell">
        <div className="section-heading">
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          <h2 id={`${id}-title`}>{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}

export default SectionShell
