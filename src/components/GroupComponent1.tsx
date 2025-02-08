import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;

  /** Style props */
  groupDivAlignItems?: CSSProperties["alignItems"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  bColor?: CSSProperties["color"];
  bogdanoffTwinsEmergeContainerTextAlign?: CSSProperties["textAlign"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  groupDivAlignItems,
  frameDivBackgroundColor,
  bColor,
  bogdanoffTwinsEmergeContainerTextAlign,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: groupDivAlignItems,
    };
  }, [groupDivAlignItems]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      color: bColor,
    };
  }, [bColor]);

  const bogdanoffTwinsEmergeContainerStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: bogdanoffTwinsEmergeContainerTextAlign,
    };
  }, [bogdanoffTwinsEmergeContainerTextAlign]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.wrapper} style={frameDivStyle}>
        <b className={styles.b} style={bStyle}>
          1969
        </b>
      </div>
      <div className={styles.bogdanoffTwinsEmergeFromQuWrapper}>
        <h3
          className={styles.bogdanoffTwinsEmergeContainer}
          style={bogdanoffTwinsEmergeContainerStyle}
        >
          <span className={styles.bogdanoffTwinsEmergeContainer1}>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              Bogdanoff twins emerge from quantum foam
            </p>
            <p className={styles.ancientProphecyZe}>
              Ancient prophecy: "Ze ones who control ze transactions"
            </p>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default GroupComponent1;
