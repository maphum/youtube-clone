import { useMemo } from "react";
import styles from "./sidebarbtn.module.css";

const Sidebarbtn = ({
  img,
  sidebartext,
  trendingWidth,
  ytFormattedStringHeight,
  trendingColor,
  trendingDisplay,
  trendingHeight,
}) => {
  const trendingStyle = useMemo(() => {
    return {
      width: trendingWidth,
      color: trendingColor,
      display: trendingDisplay,
      height: trendingHeight,
    };
  }, [trendingWidth, trendingColor, trendingDisplay, trendingHeight]);

  const ytFormattedStringStyle = useMemo(() => {
    return {
      height: ytFormattedStringHeight,
    };
  }, [ytFormattedStringHeight]);

  return (
    <div className={styles.ytdGuideEntryRenderer}>
      <div className={styles.tpYtPaperItem}>
        <img className={styles.svgIcon} alt="" src={img} />
        <div
          className={styles.ytFormattedString}
          style={ytFormattedStringStyle}
        >
          <div className={styles.trending} style={trendingStyle}>
            {sidebartext}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebarbtn;
