import { useEffect, useRef, useState } from 'react'
import styles from './Slider.module.css'

const FIVE_SECONDS_IN_MS = 5000
export const IMAGES = [
  {
    id: '1',
    src: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Descripción de la imagen 1',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1530580116833-2c4c1ff83c6b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Descripción de la imagen 2',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1533422902779-aff35862e462?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Descripción de la imagen 3',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Descripción de la imagen 4',
  },
]

export const Slider = () => {
  const listRef = useRef()
  const intervalRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleLeftClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(IMAGES.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleRightClick = () => {
    if (currentIndex === IMAGES.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    listRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
  }, [currentIndex])

  const autoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % IMAGES.length)
    }, FIVE_SECONDS_IN_MS)
  }

  useEffect(() => {
    autoPlay()

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <ul ref={listRef} className={styles.images}>
          {IMAGES.map(({ id, src, alt }) => (
            <li key={id} className={styles['image-container']}>
              <img src={src} alt={alt} className={styles.image} />
            </li>
          ))}
        </ul>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {IMAGES.map(({ id }, index) => (
          <button
            key={id}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.dot} ${
              currentIndex === index ? styles['is-active'] : ''
            }`}
          ></button>
        ))}
      </div>

      {/* Buttons left and right (absolute position) */}
      <button
        onClick={handleLeftClick}
        className={`${styles.button} ${styles['button-left']}`}
      >
        {`👈🏻`}
      </button>
      <button
        onClick={handleRightClick}
        className={`${styles.button} ${styles['button-right']}`}
      >
        {`👉🏻`}
      </button>
    </div>
  )
}
