import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import BogchainContainer from '../components/BogchainContainer';
import styles from './LandingPage1.module.css';

const LandingPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.landingPage}>
      <div className={styles.frameParent}>
        <div className={styles.frameChild2}>
          <div className={`${styles.rectangleParent} ${styles.hoverEffect}`}>
            <img
              className={styles.iconParktelegram}
              loading="lazy"
              alt=""
              src="/iconparktelegram.svg"
            />
          </div>
          <div className={`${styles.rectangleGroup} ${styles.hoverEffect}`}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/X-svg.svg"
            />
          </div>
        </div>

        <div className={`${styles.rectangleGroup} ${styles.hoverEffect}`}>
          <img
            className={styles.iconParktelegram}
            loading="lazy"
            alt=""
            src="/wallet.svg"
          />
        </div>
      </div>

      <main className={styles.screenshot20250124At940Parent}>
        <img
          className={styles.screenshot20250124At940}
          alt=""
          src="/screenshot-20250124-at-94006am-11@2x.png"
        />

        <section className={styles.image1Parent}>
          <div className={styles.bogdanoff}>
            <img
              loading="lazy"
              alt=""
              src="/bogdanoff-logo-highres-11@2x.png"
              className={styles.bogdanoffLogoHighRes1}
            />

            <b
              className={`${styles.simulator} ${styles.simulatorHover}`}
              onClick={() => navigate('/bogdanoff-institute')}
              style={{ cursor: 'pointer' }}
            >
              SIMULATOR
            </b>
          </div>
          <BogchainContainer />
        </section>
      </main>
    </div>
  );
};

export default LandingPage1;
