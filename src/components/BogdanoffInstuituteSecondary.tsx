import { FunctionComponent } from "react";
import styles from "./BogdanoffInstuituteSecondary.module.css";

export type BogdanoffInstuituteSecondaryType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const BogdanoffInstuituteSecondary: FunctionComponent<
  BogdanoffInstuituteSecondaryType
> = ({ className = "", property1 = "Frame 32" }) => {
  return (
    <div
      className={[styles.component6, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.frameContainer}>
        <div className={styles.academicParent}>
          <h2 className={styles.academic}> // ACADEMIC</h2>
          <h2 className={styles.programsResearch}>{`PROGRAMS & RESEARCH`}</h2>
        </div>
        <div className={styles.programsContent}>
          <div className={styles.fellowshipContent}>
            <div className={styles.frameParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <b className={styles.zeQuantumCouncil}>
                  Ze Quantum Council Fellowship
                </b>
              </div>
              <div className={styles.fellowshipLearnMore}>
                <a className={styles.learnMore}>LEARN MORE</a>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.rectangleDiv} />
                <b className={styles.selectedResearchPublications}>
                  Selected Research Publications
                </b>
              </div>
              <div className={styles.learnMoreWrapper}>
                <a className={styles.learnMore1}>LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.component6Inner}>
        <div className={styles.frameParent1}>
          <div className={styles.groupDiv}>
            <div className={styles.frameWrapper}>
              <div className={styles.clickHereToExpandWrapper}>
                <b className={styles.clickHereTo}>CLICK HERE TO EXPAND</b>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameWrapper1}>
              <img
                className={styles.groupIcon}
                alt=""
                src="/group-1071@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BogdanoffInstuituteSecondary;
