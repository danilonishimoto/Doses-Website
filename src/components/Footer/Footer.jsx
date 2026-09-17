import { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/logo-white.svg";
import StickerPeel from "../../bits/StickerPeel/StickerPeel.jsx";
import PillMinion from "../../assets/pill-minion-sticker.svg";
import Pill from "../../assets/pill-sticker.svg";
import Doses from "../../assets/doses-sticker.svg";
import Noti from "../../assets/noti-sticker.svg";
import ClockMinion from "../../assets/clock-minion-sticker.svg";

export function Footer() {
  const stickersRef = useRef(null);
  const [stickerWidth, setStickerWidth] = useState(0);

  useEffect(() => {
    const element = stickersRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      setStickerWidth(entry.contentRect.width);
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const stickers = [
    { image: PillMinion, width: 175, y: 40 },
    { image: Pill, width: 120, y: 85 },
    { image: Doses, width: 200, y: 20 },
    { image: Noti, width: 130, y: 65 },
    { image: ClockMinion, width: 150, y: 0 },
  ];

 
const stickerStartOffset = 100;

const positions = stickers.map((sticker, index) => {
  const startX = Math.min(stickerStartOffset, stickerWidth);
  const availableWidth = Math.max(
    stickerWidth - startX - sticker.width,
    0
  );

  const x =
    startX +
    (availableWidth * index) / Math.max(stickers.length - 1, 1);

  return { x, y: sticker.y };
});

  return (
    <footer className={styles.footer}>
      <div className={styles.application}>
        <img src={Logo} alt="Doses" />
        <p>
          Doses © 2026 <br />
          Projeto acadêmico desenvolvido para fins educacionais.
        </p>
      </div>

      <div className={styles.stickers} ref={stickersRef}>
        {stickers.map((sticker, index) => (
          <StickerPeel
            key={sticker.image}
            imageSrc={sticker.image}
            width={sticker.width}
            rotate={0}
            peelBackHoverPct={30}
            peelBackActivePct={20}
            shadowIntensity={0.2}
            lightingIntensity={0.05}
            initialPosition={positions[index]}
            peelDirection={63}
          />
        ))}
      </div>
    </footer>
  );
}