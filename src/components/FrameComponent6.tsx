import { FunctionComponent } from "react";
import BogdanoffInstuituteSecondary from "./BogdanoffInstuituteSecondary";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.component6Wrapper, className].join(" ")}>
      <BogdanoffInstuituteSecondary property1="Frame 32" />
    </div>
  );
};

export default FrameComponent6;
