import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./NonLinearNarrativeSystems.module.css";

export type NonLinearNarrativeSystemsType = {
  className?: string;
  nONLINEARNARRATIVESYSTEMS?: string;

  /** Style props */
  nONLINEARNARRATIVESYSTEMSWidth?: CSSProperties["width"];
};

const NonLinearNarrativeSystems: FunctionComponent<
  NonLinearNarrativeSystemsType
> = ({
  className = "",
  nONLINEARNARRATIVESYSTEMS,
  nONLINEARNARRATIVESYSTEMSWidth,
}) => {
  const nONLINEARNARRATIVESYSTEMSStyle: CSSProperties = useMemo(() => {
    return {
      width: nONLINEARNARRATIVESYSTEMSWidth,
    };
  }, [nONLINEARNARRATIVESYSTEMSWidth]);

  return (
    <div className={[styles.nonLinearNarrativeSystems, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
      </div>
      <b
        className={styles.nonLinearNarrativeSystems1}
        style={nONLINEARNARRATIVESYSTEMSStyle}
      >
        {nONLINEARNARRATIVESYSTEMS}
      </b>
      <div className={styles.learnMoreWrapper}>
        <a className={styles.learnMore}>LEARN MORE</a>
      </div>
    </div>
  );
};

export default NonLinearNarrativeSystems;
