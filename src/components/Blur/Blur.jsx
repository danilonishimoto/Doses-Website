import styles from "./Blur.module.css"

export function Blur({ ...props }) {
  return (
    <div className={styles.blur} {...props}/>
  )
}