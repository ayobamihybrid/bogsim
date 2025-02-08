import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  mARKETGENESIS?: string;

  /** Style props */
  mARKETGENESISWidth?: CSSProperties["width"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  mARKETGENESIS,
  mARKETGENESISWidth,
}) => {
  const mARKETGENESISStyle: CSSProperties = useMemo(() => {
    return {
      width: mARKETGENESISWidth,
    };
  }, [mARKETGENESISWidth]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <h3 className={styles.marketGenesis} style={mARKETGENESISStyle}>
        {mARKETGENESIS}
      </h3>
      <div className={styles.readMoreWrapper}>
        <a className={styles.readMore}>READ MORE</a>
      </div>
    </div>
  );
};

export default GroupComponent;
