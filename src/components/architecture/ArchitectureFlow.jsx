function ArchitectureFlow({ steps, note }) {
  return (
    <div className="flow-card">
      <h3>Primary system flow</h3>
      <ol className="flow-list" aria-label="Primary OTRIS system flow">
        {steps.map((step) => (
          <li key={step} className="flow-step">
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <p className="flow-note">{note}</p>
    </div>
  )
}

export default ArchitectureFlow
