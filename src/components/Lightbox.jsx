import { useEffect, useState } from 'react'

// Full-screen viewer for one project's images plus its details.
// Keys: ← / → to move, Esc to close.
export function Lightbox({ project, start, onClose }) {
  const images = project.gallery.length ? project.gallery : [project.logo]
  const count = images.length
  const [index, setIndex] = useState(start)
  const go = (step) => setIndex((i) => (i + step + count) % count)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % count)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [count, onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.name} images`} onClick={onClose}>
      <div className="lightbox-panel" style={{ '--accent': project.accent }} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">×</button>

        <div className="lightbox-stage">
          <div className="lightbox-image" style={project.gallery.length ? undefined : { background: project.logoBg }}>
            <img src={images[index]} alt={`${project.name} image ${index + 1}`} />
            {count > 1 && (
              <>
                <button type="button" className="lightbox-nav prev" onClick={() => go(-1)} aria-label="Previous image">‹</button>
                <button type="button" className="lightbox-nav next" onClick={() => go(1)} aria-label="Next image">›</button>
                <span className="lightbox-count">{index + 1} / {count}</span>
              </>
            )}
          </div>
          {count > 1 && (
            <div className="lightbox-thumbs">
              {images.map((src, n) => (
                <button
                  key={src}
                  type="button"
                  className={n === index ? 'active' : ''}
                  onClick={() => setIndex(n)}
                  aria-label={`Show image ${n + 1}`}
                >
                  <img src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <aside className="lightbox-info">
          <div className="project-head">
            <div className="logo-badge" style={{ background: project.logoBg }}>
              <img src={project.logo} alt="" />
            </div>
            <div>
              <h3>{project.name}</h3>
              <span className="category">{project.category}</span>
            </div>
          </div>
          <p className="lightbox-desc">{project.description}</p>
          <ul className="checks">
            {project.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
          <ul className="tags">
            {Object.values(project.stack).flat().map((t) => <li key={t}>{t}</li>)}
          </ul>
          {project.url && (
            <a className="btn primary" href={project.url} target="_blank" rel="noreferrer">Visit live site ↗</a>
          )}
        </aside>
      </div>
    </div>
  )
}
