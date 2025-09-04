/// <reference lib="dom" />
import { useEffect, useRef, useMemo, useState } from 'react'
import { Squircle } from 'corner-smoothing'


interface VariableProximitySectionProps {
  text?: string
}

// Custom hook for animation frame
function useAnimationFrame(callback: () => void) {
  useEffect(() => {
    let frameId: number
    const loop = () => {
      callback()
      frameId = requestAnimationFrame(loop)
    }
    frameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameId)
  }, [callback])
}

// Custom hook for mouse position tracking
function useMousePositionRef(containerRef: React.RefObject<HTMLDivElement>) {
  const positionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect()
        positionRef.current = { x: x - rect.left, y: y - rect.top }
      } else {
        positionRef.current = { x, y }
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMouseMove = (ev: any) => updatePosition(ev.clientX, ev.clientY)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleTouchMove = (ev: any) => {
      const touch = ev.touches[0]
      updatePosition(touch.clientX, touch.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [containerRef])

  return positionRef
}

export default function VariableProximitySection({
  text = "Whether it's creating podcasts that connect or building websites that convert, we specialise in crafting simple yet beautiful digital experiences. From custom branding to seamless UX/UI design, we help businesses grow with a focus on the future."
}: VariableProximitySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wordRefs = useRef<(any | null)[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const letterRefs = useRef<(any | null)[]>([])
  const mousePositionRef = useMousePositionRef(containerRef)
  const lastPositionRef = useRef({ x: null as number | null, y: null as number | null })
  const lastUpdateTimeRef = useRef(0)
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  // Lazy load video when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [shouldLoadVideo]);

  // Split text into words with simplified structure
  const words = useMemo(() => {
    return text.split(' ').map((word, wordIndex) => ({
      word,
      wordIndex,
      letters: word.split('').map((char, letterIndex) => ({ 
        char, 
        letterIndex,
        globalIndex: wordIndex * 1000 + letterIndex // Simplified unique index
      }))
    }))
  }, [text])

  // Calculate distance between two points
  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

  // Calculate falloff value
  const calculateFalloff = (distance: number, radius: number = 160) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1)
    return norm ** 2 // Exponential falloff for smoother effect
  }

  // Optimized animation frame loop with throttling
  useAnimationFrame(() => {
    if (!containerRef?.current) return
    
    const now = performance.now()
    const timeSinceLastUpdate = now - lastUpdateTimeRef.current
    
    // Throttle to ~60fps (16.67ms)
    if (timeSinceLastUpdate < 16) return
    
    const containerRect = containerRef.current.getBoundingClientRect()
    const { x, y } = mousePositionRef.current
    
    // Skip update if mouse hasn't moved significantly
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
      return
    }
    
    lastPositionRef.current = { x, y }
    lastUpdateTimeRef.current = now

    wordRefs.current.forEach((wordRef, wordIndex) => {
      if (!wordRef) return

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rect = (wordRef as any).getBoundingClientRect()
      const wordCenterX = rect.left + rect.width / 2 - containerRect.left
      const wordCenterY = rect.top + rect.height / 2 - containerRect.top

      const distance = calculateDistance(x, y, wordCenterX, wordCenterY)
      const radius = 160

      if (distance >= radius) {
        // Reset to base state
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (wordRef as any).style.transform = 'scale(1) translate(0px, 0px)'
        return
      }

      const falloffValue = calculateFalloff(distance, radius)
      
      // Calculate word-level scale and movement with smoother easing
      const scale = 1 + (falloffValue * 0.15) // Reduced scale for smoother effect
      const moveX = falloffValue * 6 * Math.sin(wordIndex * 0.4)
      const moveY = falloffValue * 4 * Math.cos(wordIndex * 0.3)

      // Apply word-level transforms
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(wordRef as any).style.transform = `scale(${scale}) translate(${moveX}px, ${moveY}px)`

      // Apply letter-level effects within the word
      const word = words[wordIndex]
      if (word) {
        word.letters.forEach((letter, letterIndex) => {
          const letterRef = letterRefs.current[letter.globalIndex]
          if (letterRef) {
            const letterFalloff = falloffValue * Math.max(0, 1 - letterIndex * 0.08) // Smoother diminishing
            const letterScale = 1 + (letterFalloff * 0.2)
            const letterMoveX = letterFalloff * 2 * Math.sin(letterIndex * 0.6)
            const letterMoveY = letterFalloff * 1.5 * Math.cos(letterIndex * 0.5)
            const fontWeight = Math.round(300 + (letterFalloff * 300))
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ;(letterRef as any).style.transform = `scale(${letterScale}) translate(${letterMoveX}px, ${letterMoveY}px)`
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ;(letterRef as any).style.fontWeight = fontWeight.toString()
          }
        })
      }
    })
  })

  return (
    <Squircle
      ref={sectionRef}
      cornerRadius={64}
      cornerSmoothing={0.6}
      className="relative w-full flex items-center justify-center overflow-hidden responsive-variable-proximity-radius"
      style={{
        background: '#F9F7F1',
        padding: 'clamp(1rem, 2dvw, 4rem) clamp(1rem, 2dvw, 2rem)',
        minHeight: 'clamp(80svh, 90svh, 100svh)'
      }}
    >
      {/* Video background for text container */}
      <Squircle
        ref={containerRef}
        cornerRadius={64}
        cornerSmoothing={0.6}
        className="relative z-10 w-full"
        style={{
          display: 'flex',
          padding: 'clamp(40px, 8vw, 120px)',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '1 0 0',
          background: 'rgba(248, 247, 242, 0.85)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/film.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/hero.svg"
            style={{
              pointerEvents: 'none',
            }}
          />
        )}
        {/* Text content */}
        <div
          className="relative z-10 text-center w-full"
          style={{
            color: '#000510',
            textAlign: 'center',
            fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: 'clamp(32px, 8vw, 76px)',
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: '1.2',
            wordBreak: 'keep-all',
            mixBlendMode: 'color-burn',
          }}
        >
          {words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              ref={(el) => { wordRefs.current[wordIndex] = el }}
              style={{
                display: 'inline-block',
                transition: 'all 0.08s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'default',
                userSelect: 'none',
                willChange: 'transform',
                marginRight: '0.2em'
              }}
            >
              {word.letters.map((letter) => (
                <span
                  key={letter.globalIndex}
                  ref={(el) => { letterRefs.current[letter.globalIndex] = el }}
                  style={{
                    display: 'inline-block',
                    transition: 'all 0.08s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'default',
                    userSelect: 'none',
                    willChange: 'transform, font-weight',
                    // fontWeight is set dynamically via JS for variable animation
                    // Removed mixBlendMode from here
                  }}
                >
                  {letter.char}
                </span>
              ))}
            </span>
          ))}
        </div>
      </Squircle>
    </Squircle>
  )
} 