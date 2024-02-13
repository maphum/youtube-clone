import { useCallback } from "react";
import YTSearchBar from "../components/y-t-search-bar";
import Divsections from "../components/divsections";
import { useRouter } from "next/router";
import styles from "./search-results.module.css";

const SearchResults = () => {
  const router = useRouter();

  const onYtdVideoRendererContainerClick = useCallback(() => {
    router.push("/video-page");
  }, [router]);

  const onYtdVideoRendererContainer1Click = useCallback(() => {
    router.push("/video-page");
  }, [router]);

  const onYtdVideoRendererContainer2Click = useCallback(() => {
    router.push("/video-page");
  }, [router]);

  const onYtdVideoRendererContainer3Click = useCallback(() => {
    router.push("/video-page");
  }, [router]);

  return (
    <div className={styles.searchResults}>
      <YTSearchBar
        svg="/svg.svg"
        svg1="/svg1.svg"
        divcontainerColor="#888"
        svg2="/svg2.svg"
        divvoiceSearchButton="/divvoicesearchbutton.svg"
        vector="/vector.svg"
        ytIconButton="/yticonbutton.svg"
        svg3="/svg3.svg"
      />
      <div className={styles.divContent}>
        <Divsections />
        <div className={styles.ytdSectionListRenderer}>
          <div className={styles.ytdSearchSubMenuRenderer}>
            <div className={styles.ytdToggleButtonRenderer}>
              <div className={styles.searchFilters}>
                <img className={styles.svgIcon} alt="" src="/svg22.svg" />
                <div className={styles.div}>
                  <div className={styles.filters}>Filters</div>
                </div>
              </div>
            </div>
            <img
              className={styles.divfilterMenuborderIcon}
              alt=""
              src="/divfiltermenuborder.svg"
            />
          </div>
          <div className={styles.ytdVideoRendererParent}>
            <div
              className={styles.ytdVideoRenderer}
              onClick={onYtdVideoRendererContainerClick}
            >
              <img
                className={styles.athumbnailIcon}
                alt=""
                src="/athumbnail1@2x.png"
              />
              <div className={styles.div1}>
                <div className={styles.divmeta}>
                  <div className={styles.figmaDesignTo}>
                    Figma Design to Live Website with Locofy.ai
                  </div>
                  <div className={styles.divmetadataLine}>
                    <div className={styles.kViews}>6.3K views</div>
                    <div className={styles.kViews}>• 3 months ago</div>
                  </div>
                </div>
                <div className={styles.divchannelInfo}>
                  <img
                    className={styles.ytImgShadowIcon}
                    alt=""
                    src="/ytimgshadow1@2x.png"
                  />
                  <div className={styles.kViews}>Locofy</div>
                </div>
                <div className={styles.inThisVideoContainer}>
                  <span>{`In this video you'll be learning how to go from a popular Figma design template to a Live Website using `}</span>
                  <span className={styles.locofy1}>Locofy</span>
                  <span>{`.ai! With `}</span>
                  <span className={styles.locofy1}>Locofy</span>
                  <span>.ai ...</span>
                </div>
              </div>
            </div>
            <div
              className={styles.ytdVideoRenderer}
              onClick={onYtdVideoRendererContainer1Click}
            >
              <img
                className={styles.athumbnailIcon}
                alt=""
                src="/athumbnail2@2x.png"
              />
              <div className={styles.div1}>
                <div className={styles.divmeta}>
                  <div className={styles.figmaDesignTo}>
                    Figma Design to Live Website with Locofy.ai
                  </div>
                  <div className={styles.divmetadataLine}>
                    <div className={styles.kViews}>6.3K views</div>
                    <div className={styles.kViews}>• 3 months ago</div>
                  </div>
                </div>
                <div className={styles.divchannelInfo}>
                  <img
                    className={styles.ytImgShadowIcon}
                    alt=""
                    src="/ytimgshadow2@2x.png"
                  />
                  <div className={styles.kViews}>Locofy</div>
                </div>
                <div className={styles.inThisVideoContainer}>
                  <span>{`In this video you'll be learning how to go from a popular Figma design template to a Live Website using `}</span>
                  <span className={styles.locofy1}>Locofy</span>
                  <span>{`.ai! With `}</span>
                  <span className={styles.locofy1}>Locofy</span>
                  <span>.ai ...</span>
                </div>
              </div>
            </div>
            <div
              className={styles.ytdVideoRenderer}
              onClick={onYtdVideoRendererContainer2Click}
            >
              <img
                className={styles.athumbnailIcon}
                alt=""
                src="/athumbnail3@2x.png"
              />
              <div className={styles.div1}>
                <div className={styles.divmeta}>
                  <div className={styles.figmaDesignTo}>
                    Figma Design to Live Website with Locofy.ai
                  </div>
                  <div className={styles.divmetadataLine}>
                    <div className={styles.kViews}>6.3K views</div>
                    <div className={styles.kViews}>• 3 months ago</div>
                  </div>
                </div>
                <div className={styles.divchannelInfo}>
                  <img
                    className={styles.ytImgShadowIcon}
                    alt=""
                    src="/ytimgshadow3@2x.png"
                  />
                  <div className={styles.kViews}>Locofy</div>
                </div>
                <div className={styles.inThisVideoContainer}>
                  <span>{`In this video you'll be learning how to go from a popular Figma design template to a Live Website using `}</span>
                  <span className={styles.locofy1}>Locofy</span>
                  <span>{`.ai! With `}</span>
                  <span className={styles.locofy1}>Locofy</span>
                  <span>.ai ...</span>
                </div>
              </div>
            </div>
            <div
              className={styles.ytdVideoRenderer3}
              onClick={onYtdVideoRendererContainer3Click}
            >
              <img
                className={styles.athumbnailIcon}
                alt=""
                src="/athumbnail4@2x.png"
              />
              <div className={styles.div1}>
                <div className={styles.divmeta}>
                  <div className={styles.figmaDesignTo}>
                    Figma Design to Live Website with Locofy.ai
                  </div>
                  <div className={styles.divmetadataLine}>
                    <div className={styles.kViews}>6.3K views</div>
                    <div className={styles.kViews}>• 3 months ago</div>
                  </div>
                </div>
                <div className={styles.divchannelInfo}>
                  <img
                    className={styles.ytImgShadowIcon}
                    alt=""
                    src="/ytimgshadow4@2x.png"
                  />
                  <div className={styles.kViews}>Locofy</div>
                </div>
                <div className={styles.inThisVideoContainer}>
                  <span>{`In this video you'll be learning how to go from a popular Figma design template to a Live Website using `}</span>
                  <span className={styles.locofy1}>Locofy</span>
                  <span>{`.ai! With `}</span>
                  <span className={styles.locofy1}>Locofy</span>
                  <span>.ai ...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
