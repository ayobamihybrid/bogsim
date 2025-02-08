import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.backgroundParent, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameItem} alt="" />
        <img className={styles.frameInner} loading="lazy" alt="" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.welcomeToZeContainer}>
          <span>
            <p className={styles.welcomeToZe}>
              Welcome to ze pinnacle of quantum-memetic research. At ze
              Bogdanoff Institute, we've transcended traditional market dynamics
              through our pioneering work in quantum manipulation theory and
              advanced Ponzinomics.
            </p>
            <p className={styles.ourGroundbreakingResearch}>
              Our groundbreaking research into ze Memetic Singularity - ze
              theoretical point where self-replicating ideas achieve quantum
              supremacy - has revolutionized how we understand market psychology
              and timeline manipulation.
            </p>
          </span>
        </div>
        <button className={styles.rectangleContainer}>
          <div className={styles.frameChild1} />
          <b className={styles.buyBogdanoff}>BUY $BOGDANOFF</b>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent5;
