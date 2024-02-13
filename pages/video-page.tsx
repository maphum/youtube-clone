import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import YTSearchBar from "../components/y-t-search-bar";
import styles from "./video-page.module.css";

const VideoPage: NextPage = () => {
  const router = useRouter();

  const onSearchClick = useCallback(() => {
    router.push("/search-results");
  }, [router]);

  return (
    <div className={styles.videoPage}>
      <YTSearchBar
        onSearchClick={onSearchClick}
        svg="/svg.svg"
        svg1="/svg.svg"
        svg2="/svg.svg"
        divvoiceSearchButton="/divvoicesearchbutton.svg"
        vector="/vector.svg"
        ytIconButton="/yticonbutton.svg"
        svg3="/svg.svg"
      />
      <div className={styles.divcolumns}>
        <div className={styles.divprimaryInner}>
          <div className={styles.youtubePlayerContainer}>
            <iframe
              className={styles.youtubeVideoPlayer}
              src="https://www.youtube.com/embed/oLDUkXF82fQ?rel=0"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className={styles.divbelow}>
            <div className={styles.divaboveTheFold}>
              <div className={styles.divtitle}>
                <div className={styles.locofyQuickBuilds}>
                  Locofy Quick Builds
                </div>
                <div className={styles.figmaDesignTo}>
                  Figma Design to Live Website with Locofy.ai
                </div>
              </div>
              <div className={styles.divtopRow}>
                <div className={styles.divowner}>
                  <div className={styles.ytdVideoOwnerRenderer}>
                    <img
                      className={styles.ytImgShadowIcon}
                      alt=""
                      src="/ytimgshadow@2x.png"
                    />
                    <div className={styles.divuploadInfo}>
                      <div className={styles.ytFormattedString}>
                        <div className={styles.a}>
                          <div className={styles.locofy}>Locofy</div>
                        </div>
                      </div>
                      <div className={styles.kSubscribers}>
                        <div className={styles.kSubscribers1}>
                          1.22K subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.button}>
                    <div className={styles.div}>
                      <div className={styles.subscribe}>Subscribe</div>
                    </div>
                  </button>
                </div>
                <div className={styles.ytdMenuRenderer}>
                  <div className={styles.divtopLevelButtonsComputed}>
                    <button className={styles.ytdSegmentedLikeDislikeBut}>
                      <div className={styles.ytdToggleButtonRenderer}>
                        <button className={styles.likeThisVideoAlongWith169}>
                          <img
                            className={styles.svgIcon}
                            alt=""
                            src="/svg.svg"
                          />
                          <div className={styles.div1}>169</div>
                        </button>
                      </div>
                      <div className={styles.likeThisVideoAlongWith1691} />
                      <img
                        className={styles.dislikeThisVideo}
                        alt=""
                        src="/dislike-this-video.svg"
                      />
                    </button>
                    <div className={styles.ytdButtonRenderer}>
                      <div className={styles.share}>
                        <img className={styles.svgIcon} alt="" src="/svg.svg" />
                        <div className={styles.share1}>Share</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ytdToggleButtonRenderer}>
                    <div className={styles.saveToPlaylist}>
                      <div className={styles.svg}>
                        <img
                          className={styles.frameIcon}
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                      <div className={styles.save}>Save</div>
                    </div>
                  </div>
                  <img
                    className={styles.moreActionsIcon}
                    alt=""
                    src="/more-actions.svg"
                  />
                </div>
              </div>
              <div className={styles.divdescription}>
                <div className={styles.divdescriptionInner}>
                  <div className={styles.kViews3}>6.3K views 3 months ago</div>
                  <div className={styles.inThisVideoContainer}>
                    <p className={styles.inThisVideo}>
                      In this video you'll be learning how to go from a popular
                      Figma design template to a Live Website using Locofy.ai!
                    </p>
                    <p className={styles.inThisVideo}>&nbsp;</p>
                    <p className={styles.inThisVideo}>
                      <span>{`With Locofy.ai you can turn your Figma designs into React, React Native, HTML-CSS, Next.js or Gatsby code and ship 5x faster... `}</span>
                      <b className={styles.showMore}>Show more</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div2} />
            <input
              className={styles.ytdItemSectionRenderer}
              value="Sort by"
              placeholder="51 Comments"
              type="text"
            />
          </div>
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.ytdCompactVideoRenderer}>
            <div className={styles.divdismissible}>
              <div className={styles.athumbnail}>
                <div className={styles.ytdThumbnailOverlayTimeSta}>
                  <div className={styles.minutes19Seconds}>
                    <div className={styles.div3}>50:19</div>
                  </div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <div className={styles.a1}>
                    <div className={styles.figmaDesignToLiveDashboard}>
                      <div className={styles.figmaDesignTo1}>
                        Figma design to live dashboard with Locofy.ai
                      </div>
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.divbylineContainer}>
                        <div className={styles.ytFormattedString1}>
                          <div className={styles.locofy1}>Locofy</div>
                        </div>
                      </div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.kViews}>
                          2.5K views • 2 months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ytdCompactVideoRenderer}>
            <div className={styles.divdismissible}>
              <div className={styles.athumbnail}>
                <div className={styles.ytdThumbnailOverlayTimeSta}>
                  <div className={styles.minutes19Seconds}>
                    <div className={styles.div3}>50:19</div>
                  </div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <div className={styles.a1}>
                    <div className={styles.figmaDesignToLiveDashboard}>
                      <div className={styles.figmaDesignTo1}>
                        Figma design to live dashboard with Locofy.ai
                      </div>
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.divbylineContainer}>
                        <div className={styles.ytFormattedString1}>
                          <div className={styles.locofy1}>Locofy</div>
                        </div>
                      </div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.kViews}>
                          2.5K views • 2 months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ytdCompactVideoRenderer}>
            <div className={styles.divdismissible}>
              <div className={styles.athumbnail}>
                <div className={styles.ytdThumbnailOverlayTimeSta}>
                  <div className={styles.minutes19Seconds}>
                    <div className={styles.div3}>50:19</div>
                  </div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <div className={styles.a1}>
                    <div className={styles.figmaDesignToLiveDashboard}>
                      <div className={styles.figmaDesignTo1}>
                        Figma design to live dashboard with Locofy.ai
                      </div>
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.divbylineContainer}>
                        <div className={styles.ytFormattedString1}>
                          <div className={styles.locofy1}>Locofy</div>
                        </div>
                      </div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.kViews}>
                          2.5K views • 2 months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ytdCompactVideoRenderer}>
            <div className={styles.divdismissible}>
              <div className={styles.athumbnail}>
                <div className={styles.ytdThumbnailOverlayTimeSta}>
                  <div className={styles.minutes19Seconds}>
                    <div className={styles.div3}>50:19</div>
                  </div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <div className={styles.a1}>
                    <div className={styles.figmaDesignToLiveDashboard}>
                      <div className={styles.figmaDesignTo1}>
                        Figma design to live dashboard with Locofy.ai
                      </div>
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.divbylineContainer}>
                        <div className={styles.ytFormattedString1}>
                          <div className={styles.locofy1}>Locofy</div>
                        </div>
                      </div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.kViews}>
                          2.5K views • 2 months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ytdCompactVideoRenderer}>
            <div className={styles.divdismissible}>
              <div className={styles.athumbnail}>
                <div className={styles.ytdThumbnailOverlayTimeSta}>
                  <div className={styles.minutes19Seconds}>
                    <div className={styles.div3}>50:19</div>
                  </div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <div className={styles.a1}>
                    <div className={styles.figmaDesignToLiveDashboard}>
                      <div className={styles.figmaDesignTo1}>
                        Figma design to live dashboard with Locofy.ai
                      </div>
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.divbylineContainer}>
                        <div className={styles.ytFormattedString1}>
                          <div className={styles.locofy1}>Locofy</div>
                        </div>
                      </div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.kViews}>
                          2.5K views • 2 months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ytdCompactVideoRenderer}>
            <div className={styles.divdismissible}>
              <div className={styles.athumbnail}>
                <div className={styles.ytdThumbnailOverlayTimeSta}>
                  <div className={styles.minutes19Seconds}>
                    <div className={styles.div3}>50:19</div>
                  </div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <div className={styles.a1}>
                    <div className={styles.figmaDesignToLiveDashboard}>
                      <div className={styles.figmaDesignTo1}>
                        Figma design to live dashboard with Locofy.ai
                      </div>
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.divbylineContainer}>
                        <div className={styles.ytFormattedString1}>
                          <div className={styles.locofy1}>Locofy</div>
                        </div>
                      </div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.kViews}>
                          2.5K views • 2 months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ytdCompactVideoRenderer}>
            <div className={styles.divdismissible}>
              <div className={styles.athumbnail}>
                <div className={styles.ytdThumbnailOverlayTimeSta}>
                  <div className={styles.minutes19Seconds}>
                    <div className={styles.div3}>50:19</div>
                  </div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <div className={styles.a1}>
                    <div className={styles.figmaDesignToLiveDashboard}>
                      <div className={styles.figmaDesignTo1}>
                        Figma design to live dashboard with Locofy.ai
                      </div>
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.divbylineContainer}>
                        <div className={styles.ytFormattedString1}>
                          <div className={styles.locofy1}>Locofy</div>
                        </div>
                      </div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.kViews}>
                          2.5K views • 2 months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ytdCompactVideoRenderer}>
            <div className={styles.divdismissible}>
              <div className={styles.athumbnail}>
                <div className={styles.ytdThumbnailOverlayTimeSta}>
                  <div className={styles.minutes19Seconds}>
                    <div className={styles.div3}>50:19</div>
                  </div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <div className={styles.a1}>
                    <div className={styles.figmaDesignToLiveDashboard}>
                      <div className={styles.figmaDesignTo1}>
                        Figma design to live dashboard with Locofy.ai
                      </div>
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.divbylineContainer}>
                        <div className={styles.ytFormattedString1}>
                          <div className={styles.locofy1}>Locofy</div>
                        </div>
                      </div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.kViews}>
                          2.5K views • 2 months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ytdCompactVideoRenderer}>
            <div className={styles.divdismissible}>
              <div className={styles.athumbnail}>
                <div className={styles.ytdThumbnailOverlayTimeSta}>
                  <div className={styles.minutes19Seconds}>
                    <div className={styles.div3}>50:19</div>
                  </div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <div className={styles.a1}>
                    <div className={styles.figmaDesignToLiveDashboard}>
                      <div className={styles.figmaDesignTo1}>
                        Figma design to live dashboard with Locofy.ai
                      </div>
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.divbylineContainer}>
                        <div className={styles.ytFormattedString1}>
                          <div className={styles.locofy1}>Locofy</div>
                        </div>
                      </div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.kViews}>
                          2.5K views • 2 months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
