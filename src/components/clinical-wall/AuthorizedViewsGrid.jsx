function AuthorizedViewsGrid({ views }) {
  return (
    <div className="authorized-views">
      <h3>Authorized experience examples</h3>
      <ul className="authorized-views__grid">
        {views.map((view) => (
          <li key={view} className="info-card">
            <strong>{view}</strong>
            <span>Bounded access, shared foundation.</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AuthorizedViewsGrid
