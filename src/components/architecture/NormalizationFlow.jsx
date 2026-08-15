function NormalizationFlow({ steps, boundaryLabel }) {
  return (
    <div className="flow-card flow-card--secondary">
      <div className="flow-card__header">
        <h3>Normalization view</h3>
        <span className="boundary-pill">{boundaryLabel}</span>
      </div>
      <ol className="flow-list flow-list--compact" aria-label="OTRIS normalization flow">
        {steps.map((step) => (
          <li key={step} className="flow-step">
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default NormalizationFlow
