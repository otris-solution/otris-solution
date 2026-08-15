function ClinicalWallInteraction({ steps }) {
  return (
    <div className="interaction-card">
      <h3>Clinical wall interaction law</h3>
      <ol className="interaction-list" aria-label="Clinical wall interaction law">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="interaction-note">Any illustrative figures remain explanatory and should be labeled DEMO DATA if shown later.</p>
    </div>
  )
}

export default ClinicalWallInteraction
