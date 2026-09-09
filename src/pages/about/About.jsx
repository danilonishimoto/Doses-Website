import styles from "./About.module.css";
import background from "../../assets/concrete-background.jpg";
import Lanyard from "../../bits/lanyard/Lanyard";
import front from "../../assets/Front.svg";
import frontDanilo from '../../assets/id-front-danilo.svg'
import frontLeticia from '../../assets/id-front-leticia.svg'
import back from "../../assets/id-back.svg";
import lanyardImage from "../../assets/lanyard-image.png";

export function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.head}>
          <h1>Sobre nós</h1>
          <p>
            Doses é uma aplicação criada por estudantes do curso de Sistemas de
            Informação da USP para disciplinas ministradas durante o 6º período.
          </p>
        </div>
        <div
          className={styles.team}
          style={{ backgroundImage: `url(${background})` }}
        >
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            frontImage={frontDanilo}
            backImage={back}
            imageFit="cover"
            lanyardImage={lanyardImage}
            lanyardWidth={2}
          />
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            frontImage={frontLeticia}
            backImage={back}
            imageFit="cover"
            lanyardImage={lanyardImage}
            lanyardWidth={2}
          />
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            frontImage={front}
            backImage={back}
            imageFit="cover"
            lanyardImage={lanyardImage}
            lanyardWidth={2}
          />
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            frontImage={front}
            backImage={back}
            imageFit="cover"
            lanyardImage={lanyardImage}
            lanyardWidth={2}
          />
        </div>
      </div>
    </>
  );
}
