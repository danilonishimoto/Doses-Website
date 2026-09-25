import styles from "./Resources.module.css";
import LineSidebar from "../../bits/LineSidebar/LineSidebar";
import { useQuery } from "@tanstack/react-query";
import { getResources } from "../../actions/resources";
import { ResourceItem } from "../../components/ResourceItem/ResourceItem";

export function Resources() {
  const { data, isLoading, isError } = useQuery({
     queryKey: ["events"],
     queryFn: getResources
   });

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
              "PRINCE2"
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
          {(!isLoading && !isError) && data.map((resource) => {
            return (
              <> 
              <ResourceItem
                data={resource.data}
                titulo={resource.titulo}
                descricao={resource.descricao}
                arquivo={resource.pdf}
                id={resource.id}
                grupo={resource.grupo}
              />
              <div className={styles.seminariesDivider}/>
              </>
            )
          })}
        </div>
      </div>
    </div>
  );
}
