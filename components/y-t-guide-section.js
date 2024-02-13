import Sidebarbtn from "./sidebarbtn";
import styles from "./y-t-guide-section.module.css";

const YTGuideSection = () => {
  return (
    <div className={styles.ytdGuideSectionRenderer}>
      <div className={styles.explore}>Explore</div>
      <div className={styles.divitems}>
        <Sidebarbtn img="/svg10.svg" sidebartext="Trending" />
        <Sidebarbtn
          img="/svg11.svg"
          sidebartext="Music"
          trendingWidth="38.1px"
          ytFormattedStringHeight="20px"
          trendingColor="#0f0f0f"
          trendingDisplay="flex"
          trendingHeight="16px"
        />
        <Sidebarbtn
          img="/svg12.svg"
          sidebartext={`Movies & TV`}
          trendingWidth="unset"
          ytFormattedStringHeight="unset"
          trendingColor="#000"
          trendingDisplay="inline-block"
          trendingHeight="unset"
        />
        <Sidebarbtn
          img="/svg13.svg"
          sidebartext="Live"
          trendingWidth="25.2px"
          ytFormattedStringHeight="20px"
          trendingColor="#0f0f0f"
          trendingDisplay="flex"
          trendingHeight="16px"
        />
        <Sidebarbtn
          img="/svg14.svg"
          sidebartext="Gaming"
          trendingWidth="48.6px"
          ytFormattedStringHeight="20px"
          trendingColor="#0f0f0f"
          trendingDisplay="flex"
          trendingHeight="16px"
        />
        <Sidebarbtn
          img="/svg15.svg"
          sidebartext="News"
          trendingWidth="35.3px"
          ytFormattedStringHeight="20px"
          trendingColor="#0f0f0f"
          trendingDisplay="flex"
          trendingHeight="16px"
        />
        <Sidebarbtn
          img="/svg16.svg"
          sidebartext="Sports"
          trendingWidth="41.2px"
          ytFormattedStringHeight="20px"
          trendingColor="#0f0f0f"
          trendingDisplay="flex"
          trendingHeight="16px"
        />
        <Sidebarbtn
          img="/svg17.svg"
          sidebartext="Learning"
          trendingWidth="54.2px"
          ytFormattedStringHeight="20px"
          trendingColor="#0f0f0f"
          trendingDisplay="flex"
          trendingHeight="16px"
        />
        <Sidebarbtn
          img="/svg18.svg"
          sidebartext={`Fashion & Beauty`}
          trendingWidth="107.7px"
          ytFormattedStringHeight="20px"
          trendingColor="#0f0f0f"
          trendingDisplay="flex"
          trendingHeight="16px"
        />
        <Sidebarbtn
          img="/svg19.svg"
          sidebartext="Podcasts"
          trendingWidth="58.8px"
          ytFormattedStringHeight="20px"
          trendingColor="#0f0f0f"
          trendingDisplay="flex"
          trendingHeight="16px"
        />
      </div>
    </div>
  );
};

export default YTGuideSection;
