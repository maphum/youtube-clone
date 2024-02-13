import YTGuideSection from "./y-t-guide-section";
import styles from "./divsections1.module.css";

const Divsections = () => {
  return (
    <div className={styles.divsections}>
      <div className={styles.divitems}>
        <div className={styles.ytdGuideEntryRenderer}>
          <div className={styles.tpYtPaperItem}>
            <img className={styles.svgIcon} alt="" src="/svg4.svg" />
            <div className={styles.ytFormattedString}>
              <div className={styles.home}>Home</div>
            </div>
          </div>
        </div>
        <div className={styles.ytdGuideEntryRenderer1}>
          <div className={styles.tpYtPaperItem}>
            <img className={styles.svgIcon} alt="" src="/svg5.svg" />
            <div className={styles.ytFormattedString}>
              <div className={styles.shorts}>Shorts</div>
            </div>
          </div>
        </div>
        <div className={styles.ytdGuideEntryRenderer1}>
          <div className={styles.tpYtPaperItem}>
            <img className={styles.svgIcon} alt="" src="/svg6.svg" />
            <div className={styles.ytFormattedString}>
              <div className={styles.subscriptions}>Subscriptions</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divitems1}>
        <div className={styles.ytdGuideEntryRenderer1}>
          <div className={styles.tpYtPaperItem}>
            <img className={styles.svgIcon} alt="" src="/svg7.svg" />
            <div className={styles.ytFormattedString}>
              <div className={styles.library}>Library</div>
            </div>
          </div>
        </div>
        <div className={styles.ytdGuideEntryRenderer1}>
          <div className={styles.tpYtPaperItem}>
            <img className={styles.svgIcon} alt="" src="/svg8.svg" />
            <div className={styles.ytFormattedString}>
              <div className={styles.history}>History</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ytdGuideSigninPromoRendere}>
        <div className={styles.signInTo}>
          Sign in to like videos, comment, and subscribe.
        </div>
        <div className={styles.a}>
          <img className={styles.svgIcon} alt="" src="/svg3.svg" />
          <div className={styles.div}>
            <div className={styles.signIn}>Sign in</div>
          </div>
        </div>
      </div>
      <YTGuideSection />
      <div className={styles.ytdGuideEntryRenderer5}>
        <div className={styles.tpYtPaperItem}>
          <img className={styles.svgIcon} alt="" src="/svg9.svg" />
          <div className={styles.ytFormattedString}>
            <div className={styles.browseChannels}>Browse channels</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divsections;
