import styles from './MemberCard.module.css';

export function MemberCard({ text, isVisible, elementRef }) {
  return (
    <div
      ref={elementRef}
      className={`${styles.memberCard} ${isVisible ? styles.visible : ''}`}
      aria-hidden={!isVisible}
    >
      <p>{text}</p>
    </div>
  );
}