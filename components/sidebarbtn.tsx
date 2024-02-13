import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./sidebarbtn.module.css";

export type SidebarbtnType = {
  img?: string;
  sidebartext?: string;

  /** Style props */
  trendingWidth?: CSSProperties["width"];
  ytFormattedStringHeight?: CSSProperties["height"];
  trendingColor?: CSSProperties["color"];
  trendingDisplay?: CSSProperties["display"];
  trendingHeight?: CSSProperties["height"];
};

const Sidebarbtn: NextPage<SidebarbtnType> = ({
  img,
  sidebartext,
  trendingWidth,
  ytFormattedStringHeight,
  trendingColor,
  trendingDisplay,
  trendingHeight,
}) => {
  const trendingStyle: CSSProperties = useMemo(() => {
    return {
      width: trendingWidth,
      color: trendingColor,
      display: trendingDisplay,
      height: trendingHeight,
    };
  }, [trendingWidth, trendingColor, trendingDisplay, trendingHeight]);

  const ytFormattedStringStyle: CSSProperties = useMemo(() => {
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
