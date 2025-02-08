import { FunctionComponent } from "react";
import styles from "./SocialMenu.module.css";

export type SocialMenuType = {
  className?: string;
};

const SocialMenu: FunctionComponent<SocialMenuType> = ({ className = "" }) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.iconParktelegram}
            loading="lazy"
            alt=""
            src="/iconparktelegram1.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-141.svg"
          />
        </div>
      </div>
      <img
        className={styles.groupIcon}
        loading="lazy"
        alt=""
        src="/group-17.svg"
      />
    </header>
  );
};

export default SocialMenu;
