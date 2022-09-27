import ProgressLineSingle from "../../../ProgressLineSingle";
import styles from "./style.module.css";

const AlternativeViews = () => {
  return (
    <div className={styles.compareChartContainer}>
      <div className={styles.a}>Left</div>
      <div></div>
      <div className={styles.b}>Right</div>

      <ProgressLineSingle width="70" type="horizontal" reverse />
      <div>Tissue cut of</div>
      <ProgressLineSingle width="70" type="horizontal" />

      <ProgressLineSingle width="70" type="horizontal" reverse />
      <div>Tissue cut of</div>
      <ProgressLineSingle width="70" type="horizontal" />

      <ProgressLineSingle width="70" type="horizontal" reverse />
      <div>Not enough muscle</div>
      <ProgressLineSingle width="70" type="horizontal" />
    </div>
  );
};

export default AlternativeViews;
