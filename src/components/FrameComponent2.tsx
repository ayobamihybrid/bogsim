import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  aLLSYSTEMS?: string;
  oNLINE?: string;
  aLLSYSTEMS1?: string;
  oNLINE1?: string;

  /** Style props */
  frameDivTop?: CSSProperties["top"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  frameDivTop,
  aLLSYSTEMS,
  oNLINE,
  aLLSYSTEMS1,
  oNLINE1,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  return (
    <div
      className={[styles.allSystemsOnlineParent, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.allSystemsOnline}>
        <span className={styles.allSystemsOnlineTxtContainer}>
          <p className={styles.allSystems}>{aLLSYSTEMS}</p>
          <p className={styles.online}>{oNLINE}</p>
        </span>
      </div>
      <div className={styles.runningStatus}>
        <div className={styles.allSystemsOnline1}>
          <span className={styles.allSystemsOnlineTxtContainer}>
            <p className={styles.allSystems}>{aLLSYSTEMS1}</p>
            <p className={styles.online}>{oNLINE1}</p>
          </span>
        </div>
        <div className={styles.runningStatusChild} />
      </div>
    </div>
  );
};

export default FrameComponent2;
