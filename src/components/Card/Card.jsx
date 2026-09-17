import styles from './Card.module.css'

export function Card({ img, heading, text, isReverse}) {
  return (
    <>
      <div className={`${styles.card} ${isReverse ? styles.reverse : ''}`}>
        <div className={styles.image}>
          <img src={img}/>
        </div>
        <div className={styles.content}>
          <p className={styles.heading}>
            {heading}
          </p>
          <div className={styles.text}>
            {text}
          </div>
        </div>
      </div>
    </>
  )
}