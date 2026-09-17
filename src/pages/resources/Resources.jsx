import styles from "./Resources.module.css";
import LineSidebar from "../../bits/LineSidebar/LineSidebar";

export function Resources() {
  return (
    <div className={styles.resources}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Recursos.</h1>
        <p>
          Página dedicada às anotações e mídias de cada seminário da disciplina
          de Gestão de Projeto de TI.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.summary}>
          <p className={styles.summaryTitle}>Sumário.</p>
          <LineSidebar
            items={[
              "Escopo",
              "Tempo",
              "Custo",
              "Qualidade",
              "Recursos",
              "Comunicações",
              "Riscos",
              "Aquisições",
              "Partes interessadas e integração",
              "Prince 2"
            ]}
            accentColor="#7EDCB9"
            textColor="#000000"
            markerColor="#3b3939"
            showIndex
            showMarker
            proximityRadius={100}
            maxShift={30}
            falloff="smooth"
            markerLength={60}
            markerGap={0}
            tickScale={0.5}
            scaleTick
            itemGap={20}
            fontSize={1.1}
            smoothing={100}
            defaultActive={0}
            onItemClick={(index, label) => console.log(index, label)} // Alterar quando tiver seminários
          />
        </div>
        <div className={styles.seminaries}>
          <h2 className={styles.seminaryTitle}>
            00. Título
          </h2>
          <div className={styles.seminaryInfo}>
            <p>Grupo: X</p>
            <p>Data: DD/MM/YYYY</p>
          </div>
          <div className={styles.seminaryContent}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className={styles.seminaryImage} /> 
          </div>
        </div>
      </div>
    </div>
  );
}
