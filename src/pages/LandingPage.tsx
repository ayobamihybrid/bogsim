import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import SocialMenu from "../components/SocialMenu";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.landingPage}>
      <SocialMenu />
      <main className={styles.screenshot20250124At940Parent}>
        <img
          className={styles.screenshot20250124At940}
          alt=""
          src="/screenshot-20250124-at-94006am-1@2x.png"
        />
        <section className={styles.image1Parent}>
          <div className={styles.image1} />
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b 
                className={styles.simulator} 
                onClick={() => navigate('/bogdanoff-institute')}
                style={{ cursor: 'pointer' }}
              >
                MEME/ENG
              </b>
              <img
                className={styles.bogdanoffLogoHighRes1}
                loading="lazy"
                alt=""
                src="/bogdanoff-logo-highres-1@2x.png"
              />
            </div>
          </div>
          <div 
            onClick={() => navigate('/timeline')}
            style={{ cursor: 'pointer' }}
          >
            Timeline
          </div>
          <FrameComponent3 />
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
