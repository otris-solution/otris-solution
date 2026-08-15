function PlaceholderImage({ title, note }) {
  return (
    <figure className="placeholder-card" role="img" aria-label={`${title}. ${note}.`}>
      <div className="placeholder-art" aria-hidden="true">
        <span className="placeholder-orbit placeholder-orbit-a" />
        <span className="placeholder-orbit placeholder-orbit-b" />
        <span className="placeholder-mark">OTRIS</span>
      </div>
      <figcaption>
        <strong>{title}</strong>
        <span>{note}</span>
      </figcaption>
    </figure>
  )
}

export default PlaceholderImage
