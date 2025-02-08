import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import GroupComponent1 from "./GroupComponent1";
import FrameComponent1 from "./FrameComponent1";
import styles from "./BogdanoffTimeline.module.css";

export type BogdanoffTimelineType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const BogdanoffTimeline: FunctionComponent<BogdanoffTimelineType> = ({
  className = "",
  property1 = "Frame 28",
}) => {
  return (
    <section
      className={[styles.bogdanoffTimeline, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.frameParent4}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
              <h3 className={styles.originProtocol}>Origin Protocol</h3>
              <div className={styles.readMoreButtons}>
                <a className={styles.readMore}>READ MORE</a>
              </div>
            </div>
            <GroupComponent mARKETGENESIS="MARKET GENESIS" />
            <GroupComponent
              mARKETGENESIS="TIMELINE MANIFESTATION"
              mARKETGENESISWidth="186px"
            />
          </div>
        </div>
        <div className={styles.frameWrapper3}>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <button className={styles.backToMainParentWrapper}>
              <div className={styles.backToMainParent}>
                <div className={styles.backToMainGrandparent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <b className={styles.backToMain}>BACK TO MAIN</b>
              </div>
            </button>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent2}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameContainer}>
                      <GroupComponent1 />
                      <FrameComponent1 />
                      <FrameComponent1
                        groupDivAlignItems="flex-end"
                        bogdanoffTwinsEmergeContainerTextAlign="right"
                      />
                      <FrameComponent1
                        groupDivAlignItems="flex-end"
                        bogdanoffTwinsEmergeContainerTextAlign="right"
                      />
                      <GroupComponent1
                        groupDivAlignItems="flex-end"
                        frameDivBackgroundColor="#000"
                        bColor="#fff"
                        bogdanoffTwinsEmergeContainerTextAlign="right"
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <GroupComponent1
                      groupDivAlignItems="flex-start"
                      frameDivBackgroundColor="#fff"
                      bColor="#121212"
                      bogdanoffTwinsEmergeContainerTextAlign="left"
                    />
                    <FrameComponent1
                      groupDivAlignItems="flex-start"
                      bogdanoffTwinsEmergeContainerTextAlign="left"
                    />
                    <FrameComponent1
                      groupDivAlignItems="flex-start"
                      bogdanoffTwinsEmergeContainerTextAlign="left"
                    />
                    <FrameComponent1
                      groupDivAlignItems="flex-start"
                      bogdanoffTwinsEmergeContainerTextAlign="left"
                    />
                    <GroupComponent1
                      groupDivAlignItems="flex-start"
                      frameDivBackgroundColor="#000"
                      bColor="#fff"
                      bogdanoffTwinsEmergeContainerTextAlign="left"
                    />
                  </div>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-11.svg"
                  />
                </div>
                <div className={styles.frameWrapper1}>
                  <button className={styles.groupButton}>
                    <div className={styles.scrollGrandparentParent}>
                      <div className={styles.scrollGrandparent}>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                      <b className={styles.scrollToTop}>SCROLL TO TOP</b>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles.timeline}> // TIMELINE</h2>
        <h2 className={styles.blahBleeh}>{`BLAH BLEEH `}</h2>
        <div className={styles.frameParent3}>
          <div className={styles.frameWrapper5}>
            <div className={styles.frameWrapper4}>
              <div className={styles.clickHereToExpandWrapper}>
                <h3 className={styles.clickHereTo}>CLICK HERE TO EXPAND</h3>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper7}>
            <div className={styles.frameWrapper6}>
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/group-107@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BogdanoffTimeline;
