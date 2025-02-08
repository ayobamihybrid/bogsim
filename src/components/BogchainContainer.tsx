import { FunctionComponent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BogchainContainer.module.css';

export type BogchainContainerType = {
  className?: string;
};

type CardProps = {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: () => void;
  activeBox: string | null;
};

const Card: FunctionComponent<CardProps> = ({
  id,
  title,
  subtitle,
  buttonText,
  onClick,
  activeBox,
}) => (
  <div
    className={`${styles.card} ${activeBox === id ? styles.cardActive : ''}`}
  >
    <div className={styles.cardContent}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
    <button onClick={onClick} className={styles.button}>
      {buttonText}
    </button>
  </div>
);

const BogchainContainer: FunctionComponent<BogchainContainerType> = ({
  className = '',
}) => {
  const navigate = useNavigate();
  const [activeBox, setActiveBox] = useState<string | null>(null);

  const handleBoxClick = (boxId: string) => {
    setActiveBox(boxId);
  };

  const onTimelineClick = useCallback(() => {
    navigate('/timeline');
  }, [navigate]);

  const onMemeEngClick = useCallback(() => {
    navigate('/bogdanoff-institute');
  }, [navigate]);

  const onRunClick = useCallback(() => {
    navigate('/chatbot-page-7');
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div onClick={() => handleBoxClick('wallet')}>
          <Card
            id="wallet"
            title="EMPTY YOUR"
            subtitle="WALLET HERE!"
            buttonText="BUY BOGDANOFF"
            onClick={() => navigate('/buy')}
            activeBox={activeBox}
          />
        </div>

        <div onClick={() => handleBoxClick('timeline')}>
          <Card
            id="timeline"
            title="STUDY THE"
            subtitle="BOGDANOFF TIMELINE"
            buttonText="TIMELINE"
            onClick={onTimelineClick}
            activeBox={activeBox}
          />
        </div>

        <div
          className={styles.memeticContainer}
          onClick={() => handleBoxClick('memetic')}
        >
          <Card
            id="memetic"
            title="ENTER"
            subtitle="MEMETIC/ENGINE"
            buttonText="MEME/ENG"
            onClick={onMemeEngClick}
            activeBox={activeBox}
          />
        </div>

        <div className={styles.statusContainer}>
          <div className={styles.statusCard}>
            <div>
              <p className={styles.statusText}>BOGDANOFF SIMULATION</p>
              <p className={styles.statusReady}>READY</p>
            </div>
            <button onClick={onRunClick} className={styles.runButton}>
              RUN
            </button>
          </div>

          <div onClick={() => handleBoxClick('council')}>
            <Card
              id="council"
              title="JOIN THE"
              subtitle="BOGCOUNCIL"
              buttonText="COMING SOON..."
              onClick={() => {}}
              activeBox={activeBox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BogchainContainer;
