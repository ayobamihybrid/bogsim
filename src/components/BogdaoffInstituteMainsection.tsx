import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent6 from "./FrameComponent6";
import styles from "./BogdaoffInstituteMainsection.module.css";

export type BogdaoffInstituteMainsectionType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const BogdaoffInstituteMainsection: FunctionComponent<
  BogdaoffInstituteMainsectionType
> = ({ className = "", property1 = "Frame 36" }) => {
  return (
    <div
      className={[styles.bogdaoffInstituteMainsection, className].join(" ")}
      data-property1={property1}
    >
      <FrameComponent4 />
      <div className={styles.bogdaoffInstituteMainsectionInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.clickHereToExpandWrapper}>
                <b className={styles.clickHereTo}>CLICK HERE TO EXPAND</b>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.groupDiv}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-1071@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <FrameComponent6 />
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper3}>
          <div className={styles.frameWrapper2}>
            <div className={styles.clickHereToExpandContainer}>
              <b className={styles.clickHereTo1}>CLICK HERE TO EXPAND</b>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper5}>
          <div className={styles.frameWrapper4}>
            <img className={styles.frameItem} alt="" src="/group-1071@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BogdaoffInstituteMainsection;
