import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.allSystemsOnlineParent}>
                <div className={styles.allSystemsOnlineContainer}>
                  <p className={styles.allSystems}>ALL SYSTEMS</p>
                  <p className={styles.allSystems}>
                    <b>ONLINE</b>
                  </p>
                </div>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.bogdanoffSimulationReadyContainer}>
                <p className={styles.allSystems}>BOGDANOFF SIMULATION</p>
                <p className={styles.allSystems}>
                  <b>READY</b>
                </p>
              </div>
            </div>
          </div>
          <button className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.runAgent}>RUN AGENT</div>
          </button>
        </div>
      </div>
      <div className={styles.studyTheBogdanoffTimelineParent}>
        <div className={styles.bogdanoffSimulationReadyContainer}>
          <p className={styles.allSystems}>STUDY THE</p>
          <p className={styles.allSystems}>
            <b>BOGDANOFF TIMELINE</b>
          </p>
        </div>
        <div className={styles.timelineWrapper}>
          <div className={styles.timeline}>TIMELINE</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild1} />
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild2} />
            <div className={styles.bogdanoffSimulationReadyContainer}>
              <p className={styles.allSystems}>STUDY THE</p>
              <p className={styles.allSystems}>
                <b>BOGDANOFF TIMELINE</b>
              </p>
            </div>
            <button className={styles.frameButton}>
              <div className={styles.rectangleParent2}>
                <div className={styles.frameChild3} />
                <div className={styles.memeeng}>MEME/ENG</div>
              </div>
            </button>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild4} />
              <div className={styles.bogdanoffSimulationReadyWrapper}>
                <div className={styles.bogdanoffSimulationReadyContainer1}>
                  <p className={styles.bogdanoffSimulation1}>
                    BOGDANOFF SIMULATION
                  </p>
                  <p className={styles.ready1}>
                    <b>READY</b>
                  </p>
                </div>
              </div>
              <button className={styles.runWrapper}>
                <div className={styles.run}>RUN</div>
              </button>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild5} />
              <div className={styles.bogdanoffSimulationReadyContainer}>
                <p className={styles.allSystems}>STUDY THE</p>
                <p className={styles.allSystems}>
                  <b>BOGDANOFF TIMELINE</b>
                </p>
              </div>
              <button className={styles.frameWrapper1}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild6} />
                  <div className={styles.enterTheCouncil}>
                    ENTER THE COUNCIL
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
