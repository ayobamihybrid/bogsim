import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BogdanoffTimeline from "../components/BogdanoffTimeline";
import styles from "./Timeline.module.css";

const Timeline: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div className={styles.timeline}>
      <img
        className={styles.screenshot20250124At940}
        alt=""
        src="/screenshot-20250124-at-94006am-2@2x.png"
      />
      <div className={styles.timelineInner}>
        <div className={styles.vectorParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/vector-62.svg"
          />
          <div className={styles.vectorWrapper}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/vector-64.svg"
            />
          </div>
        </div>
      </div>
      <main className={styles.frameParent}>
        <header className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <button className={styles.frameContainer}>
              <div className={styles.groupDiv} onClick={onGroupContainerClick}>
                <div className={styles.frameDiv}>
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.backToMain}>BACK TO MAIN</div>
                </div>
              </div>
            </button>
            <div className={styles.frameWrapper1}>
              <button className={styles.rectangleParent}>
                <div className={styles.frameInner} />
                <a className={styles.simulator}>SIMULATOR</a>
                <img
                  className={styles.bogdanoffLogoHighRes1}
                  alt=""
                  src="/bogdanoff-logo-highres-1@2x.png"
                />
              </button>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.iconParktelegram}
                  loading="lazy"
                  alt=""
                  src="/iconparktelegram.svg"
                />
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild1} />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-14.svg"
                />
              </div>
              <button className={styles.x2d680126Wrapper}>
                <div className={styles.backToMain}>0x2d68...0126</div>
              </button>
            </div>
          </div>
        </header>
        <BogdanoffTimeline property1="Frame 28" />
      </main>
    </div>
  );
};

export default Timeline;
