import { useEffect } from "react";
import styles from "./menu.module.css";

const Menu = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.menu} data-animate-on-scroll>
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
      <div className={styles.ytdGuideSectionRenderer}>
        <div className={styles.explore}>Explore</div>
        <div className={styles.divitems2}>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg10.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.trending}>Trending</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg11.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.music}>Music</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg12.svg" />
              <div className={styles.ytFormattedString7}>
                <div className={styles.moviesTv}>{`Movies & TV`}</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg13.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.live}>Live</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg14.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.gaming}>Gaming</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg15.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.news}>News</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg16.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.sports}>Sports</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg17.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.learning}>Learning</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg18.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.fashionBeauty}>{`Fashion & Beauty`}</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg19.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.podcasts}>Podcasts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ytdGuideEntryRenderer15}>
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

export default Menu;
