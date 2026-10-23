import { useEffect, useState } from 'react'

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Auto-advancing slideshow. Moves one image at a time, pauses on hover,
// and calls onOpen(index) when an image is clicked.
// `perView` > 1 shows several slides at once (used for tall phone screenshots).
export function Carousel({ images, label, onOpen, perView = 1, interval = 3000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const lastStart = Math.max(images.length - perView, 0)

  useEffect(() => {
    if (paused || lastStart === 0 || reduceMotion) return
    const id = setInterval(() => setIndex((i) => (i >= lastStart ? 0 : i + 1)), interval)
    return () => clearInterval(id)
  }, [paused, lastStart, interval])

  return (
    <div
      className={perView > 1 ? 'carousel multi' : 'carousel'}
      style={{ '--per-view': perView }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-track" style={{ transform: `translateX(-${(index * 100) / perView}%)` }}>
        {images.map((src, n) => {
          const visible = n >= index && n < index + perView
          return (
            <button
              key={src}
              type="button"
              className="carousel-slide"
              onClick={() => onOpen(n)}
              tabIndex={visible ? 0 : -1}
              aria-label={`View ${label} image ${n + 1} of ${images.length}`}
            >
              {/* load the visible slides plus the next one; the rest load as the slideshow reaches them */}
              <img src={src} alt="" loading={n <= index + perView ? 'eager' : 'lazy'} />
            </button>
          )
        })}
      </div>
      {lastStart > 0 && (
        <div className="carousel-dots">
          {Array.from({ length: lastStart + 1 }, (_, n) => (
            <button
              key={n}
              type="button"
              className={n === index ? 'active' : ''}
              onClick={() => setIndex(n)}
              aria-label={`Go to slide ${n + 1}`}
            />
          ))}
        </div>
      )}
      <span className="carousel-hint">Click to view</span>
    </div>
  )
}
