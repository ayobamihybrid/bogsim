import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "../components/FrameComponent5";
import BogdaoffInstituteMainsection from "../components/BogdaoffInstituteMainsection";
import styles from "./BogdanoffInstitute.module.css";

const BogdanoffInstitute: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  return (
    <div className={styles.bogdanoffInstitute}>
      <header className={styles.bogdanoffInstituteInner}>
        <div className={styles.frameParent}>
          <button className={styles.frameWrapper}>
            <div
              className={styles.frameContainer}
              onClick={onGroupContainerClick}
            >
              <div className={styles.frameGroup}>
                <div className={styles.vectorWrapper}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
                <div className={styles.backToMain}>BACK TO MAIN</div>
              </div>
            </div>
          </button>
          <div className={styles.frameDiv}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
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
              <div className={styles.frameItem} />
              <img
                className={styles.iconParktelegram}
                loading="lazy"
                alt=""
                src="/iconparktelegram.svg"
              />
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
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
      <FrameComponent5 />
      <section className={styles.bogdaoffInstituteMainsectionWrapper}>
        <BogdaoffInstituteMainsection property1="Frame 36" />
      </section>
    </div>
  );
};

export default BogdanoffInstitute;
