import { FunctionComponent } from "react";
import NonLinearNarrativeSystems from "./NonLinearNarrativeSystems";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.researchParent}>
        <h2 className={styles.research}> // RESEARCH</h2>
        <h2 className={styles.pillars}>PILLARS</h2>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
          </div>
          <b className={styles.quantumMemeDynamics}>Quantum Meme Dynamics</b>
          <div className={styles.pillarsLearnMore}>
            <a className={styles.learnMore}>LEARN MORE</a>
          </div>
        </div>
        <NonLinearNarrativeSystems nONLINEARNARRATIVESYSTEMS="NON-LINEAR NARRATIVE SYSTEMS" />
        <NonLinearNarrativeSystems
          nONLINEARNARRATIVESYSTEMS="Hyperdimensional Market Mechanics"
          nONLINEARNARRATIVESYSTEMSWidth="298px"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
