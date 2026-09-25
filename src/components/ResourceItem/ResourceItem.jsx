import styles from "./ResourceItem.module.css";
import { Button } from "../Button/Button";

export function ResourceItem({ titulo, data, descricao, arquivo, id, grupo }) {
  return (
    <div className={styles.resourceItem}>
      <div className={styles.resourceItemHead}>
        <h2 className={styles.seminaryTitle}>
          {id}. {titulo}
        </h2>
        <Button onClick={() => window.open(arquivo, "_blank")}>
          <a href={arquivo} target="_blank" rel="noopener noreferrer" style={{ all: "unset"}}>
            Abrir arquivo
          </a>
        </Button>
      </div>
      <div className={styles.seminaryInfo}>
        <p>Grupo: {grupo}</p>
        <div className={styles.seminaryDivider} />
        <p>Data de entrega: {data}</p>
      </div>
      <div className={styles.seminaryContent}>
        <p>{descricao}</p>
      </div>
    </div>
  );
}
