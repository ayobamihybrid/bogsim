import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;

  /** Style props */
  groupDivAlignItems?: CSSProperties["alignItems"];
  bogdanoffTwinsEmergeContainerTextAlign?: CSSProperties["textAlign"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  groupDivAlignItems,
  bogdanoffTwinsEmergeContainerTextAlign,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignItems: groupDivAlignItems,
    };
  }, [groupDivAlignItems]);

  const bogdanoffTwinsEmergeContainer1Style: CSSProperties = useMemo(() => {
    return {
      textAlign: bogdanoffTwinsEmergeContainerTextAlign,
    };
  }, [bogdanoffTwinsEmergeContainerTextAlign]);

  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent} style={groupDiv1Style}>
        <div className={styles.placeholderWrapper}>
          <b className={styles.placeholder}>1969</b>
        </div>
        <div className={styles.bogdanoffTwinsEmergeFromQuWrapper}>
          <h3
            className={styles.bogdanoffTwinsEmergeContainer}
            style={bogdanoffTwinsEmergeContainer1Style}
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
    </div>
  );
};

export default FrameComponent1;
