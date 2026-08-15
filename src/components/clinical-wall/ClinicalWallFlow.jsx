function ClinicalWallFlow({ steps, privacyLine }) {
  return (
    <div className="flow-card">
      <div className="flow-card__header">
        <h3>Ecosystem flow</h3>
        <span className="privacy-pill">{privacyLine}</span>
      </div>
      <ol className="flow-list" aria-label="Clinical wall ecosystem flow">
        {steps.map((step) => (
          <li key={step} className="flow-step">
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ClinicalWallFlow
