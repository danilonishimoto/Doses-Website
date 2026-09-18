import styles from "./Home.module.css";
import { Button } from "../../components/Button/Button";
import GradientText from "../../bits/GradientText/GradientText";
import phones from "../../assets/phone-mockups.png";
import { Blur } from "../../components/Blur/Blur";

export function Home() {
  return (
    <>
      <div className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>
              Chega de esquecer a {}
              <GradientText
                colors={["#7EDCB9", "#47BA90", "#2C8380"]}
                animationSpeed={4}
                showBorder={false}
                className="custom-class"
              >
                hora
              </GradientText>
              {} de tomar o remédio
            </h1>
            <p style={{ marginBottom: '10px' }}>
              Tenha maior controle da sua saúde e de que você ama com o app
              Doses.{" "}
            </p>
            <Button>Acesse nossa aplicação</Button>
          </div>
          <div className={styles.heroImages}>
            <img src={phones} />
            <Blur
              style={{
                right: "clamp(-123px, -18vw, -40px)",
                top: "clamp(80px, 12vw, 120px)",
              }}
            />
          </div>

          <Blur
            style={{
              left: "clamp(-123px, -18vw, -40px)",
              bottom: "clamp(0px, 4vw, 40px)",
            }}
          />
        </section>
      </div>
    </>
  );
}
