import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./menu.module.css";

export type MenuType = {
  onClose?: () => void;
};

const Menu: NextPage<MenuType> = ({ onClose }) => {
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
            <img className={styles.svgIcon} alt="" src="/svg.svg" />
            <div className={styles.ytFormattedString}>
              <div className={styles.home}>Home</div>
            </div>
          </div>
        </div>
        <div className={styles.ytdGuideEntryRenderer1}>
          <div className={styles.tpYtPaperItem}>
            <img className={styles.svgIcon} alt="" src="/svg.svg" />
            <div className={styles.ytFormattedString}>
              <div className={styles.shorts}>Shorts</div>
            </div>
          </div>
        </div>
        <div className={styles.ytdGuideEntryRenderer1}>
          <div className={styles.tpYtPaperItem}>
            <img className={styles.svgIcon} alt="" src="/svg.svg" />
            <div className={styles.ytFormattedString}>
              <div className={styles.subscriptions}>Subscriptions</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divitems1}>
        <div className={styles.ytdGuideEntryRenderer1}>
          <div className={styles.tpYtPaperItem}>
            <img className={styles.svgIcon} alt="" src="/svg.svg" />
            <div className={styles.ytFormattedString}>
              <div className={styles.library}>Library</div>
            </div>
          </div>
        </div>
        <div className={styles.ytdGuideEntryRenderer1}>
          <div className={styles.tpYtPaperItem}>
            <img className={styles.svgIcon} alt="" src="/svg.svg" />
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
          <img className={styles.svgIcon} alt="" src="/svg.svg" />
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
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.trending}>Trending</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.music}>Music</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.ytFormattedString7}>
                <div className={styles.moviesTv}>{`Movies & TV`}</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.live}>Live</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.gaming}>Gaming</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.news}>News</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.sports}>Sports</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.learning}>Learning</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.fashionBeauty}>{`Fashion & Beauty`}</div>
              </div>
            </div>
          </div>
          <div className={styles.ytdGuideEntryRenderer1}>
            <div className={styles.tpYtPaperItem}>
              <img className={styles.svgIcon} alt="" src="/svg.svg" />
              <div className={styles.ytFormattedString}>
                <div className={styles.podcasts}>Podcasts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ytdGuideEntryRenderer15}>
        <div className={styles.tpYtPaperItem}>
          <img className={styles.svgIcon} alt="" src="/svg.svg" />
          <div className={styles.ytFormattedString}>
            <div className={styles.browseChannels}>Browse channels</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
