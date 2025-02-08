import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div className={[styles.instanceParent, className].join(" ")}>
      <header className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.iconParktelegram}
            alt=""
            src="/iconparktelegram1.svg"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.weuibackOutlinedParent}>
            <img
              className={styles.weuibackOutlinedIcon}
              alt=""
              src="/weuibackoutlined.svg"
            />
            <div className={styles.backToMain}>Back to Main</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <img
            className={styles.iconParktelegram}
            alt=""
            src="/group-141.svg"
          />
        </div>
        <img className={styles.groupIcon} alt="" />
        <div className={styles.frameGroup}>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <div className={styles.simulator}>SIMULATOR</div>
          </div>
          <img
            className={styles.bogdanoffLogoHighRes1}
            alt=""
            src="/bogdanoff-logo-highres-11@2x.png"
          />
        </div>
      </header>
      <button className={styles.frameContainer}>
        <div className={styles.groupDiv} onClick={onGroupContainerClick}>
          <div className={styles.frameDiv}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.backToMain1}>BACK TO MAIN</div>
          </div>
        </div>
      </button>
      <div className={styles.frameWrapper1}>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild1} />
          <a className={styles.simulator1}>SIMULATOR</a>
          <img
            className={styles.bogdanoffLogoHighRes11}
            alt=""
            src="/bogdanoff-logo-highres-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild2} />
          <img
            className={styles.iconParktelegram1}
            alt=""
            src="/iconparktelegram.svg"
          />
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.frameChild3} />
          <img className={styles.frameChild4} alt="" src="/group-14.svg" />
        </div>
        <button className={styles.x2d680126Wrapper}>
          <div className={styles.backToMain1}>0x2d68...0126</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent7;
