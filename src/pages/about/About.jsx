import styles from "./About.module.css";
import background from "../../assets/concrete-background.jpg";
import Lanyard from "../../bits/lanyard/Lanyard";
import frontDanilo from "../../assets/id-front-danilo.svg";
import frontLeticia from "../../assets/id-front-leticia.svg";
import frontGiovanna from '../../assets/id-front-giovanna.svg'
import frontAika from '../../assets/id-front-aika.svg'
import back from "../../assets/id-back.svg";
import lanyardImage from "../../assets/lanyard-image.png";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import { useState } from "react";
import { Card } from "../../components/Card/Card";
import PillsImage from "../../assets/pills-image.png";
import DosesMockup from '../../assets/doses-mockup.png'
import OldPerson from '../../assets/old-person.png'

export function About() {
  const [teamImageIndex, setTeamImageIndex] = useState(0);
  const teamImage = [frontDanilo, frontGiovanna, frontAika, frontLeticia];

  const previousTeamImage = () => {
    if (teamImageIndex === 0) setTeamImageIndex(teamImage.length - 1);
    else setTeamImageIndex((prev) => prev - 1);
  };

  const nextTeamImage = () => {
    if (teamImageIndex === teamImage.length - 1) setTeamImageIndex(0);
    else setTeamImageIndex((prev) => prev + 1);
  };

  return (
    <>
      <div className={styles.about}>
        <div className={styles.aboutUs}>
          <div className={styles.head}>
            <h1 className={styles.heading}>Sobre nós.</h1>
            <p>
              Doses é uma aplicação criada por estudantes do curso de Sistemas
              de Informação da USP para disciplinas ministradas durante o 6º
              período.
            </p>
            <p>Clique nas setas para conhecer nosso time.</p>
          </div>
          <div
            className={styles.team}
            style={{ backgroundImage: `url(${background})` }}
          >
            <img src={LeftArrow} onClick={previousTeamImage} />
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              frontImage={teamImage[teamImageIndex]}
              backImage={back}
              imageFit="cover"
              lanyardImage={lanyardImage}
              lanyardWidth={2}
            />
            <img src={RightArrow} onClick={nextTeamImage} />
          </div>
        </div>
        <div className={styles.application}>
          <h2>Sobre a aplicação.</h2>
          <div className={styles.cards}>
          <Card
            heading={"Problema"}
            text={
              <p>
                Atualmente, o uso de medicamentos faz parte da rotina de muitas
                pessoas, mas gerenciar diferentes doses, horários e orientações
                pode ser um <span style={{ fontWeight: 'bold' }}>desafio</span>. Esse cenário é ainda mais relevante diante
                da <span style={{ fontWeight: 'bold' }}>polifarmácia*</span>, caracterizada pelo uso simultâneo de cinco ou
                mais medicamentos e presente em <span style={{ fontWeight: 'bold' }}>37%</span> da população mundial.
                <br />
                <br />
                *Segundo um estudo publicado no PubMed, com dados de 2024.
              </p>
            }
            img={PillsImage}
          />

          <Card 
            heading={"Nossa solução"}
            text={<p>
              O Doses foi desenvolvido para auxiliar as pessoas no <span style={{ fontWeight: 'bold'}}>controle de seus medicamentos</span>, organizando doses, horários e orientações em um só lugar, tornando o acompanhamento mais simples, seguro e acessível.
            </p>}
            img={DosesMockup}
            isReverse={true}
          />

          <Card 
            heading={"Acessibilidade"}
            text={<p>
              Visando atender diferentes grupos e pessoas com vivências variadas, desenvolvemos uma aplicação capaz de se adaptar a diferentes necessidades e contextos, proporcionando uma experiência mais acessível, intuitiva e inclusiva para todos os usuários.
            </p>}
            img={OldPerson}
          />

          </div>
        </div>
      </div>
    </>
  );
}
