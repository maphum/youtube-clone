import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";
import YTSearchBar from "../components/y-t-search-bar";
import styles from "./video-page.module.css";
import { formatDistance } from "date-fns";
import { REACT_APP_API_KEY } from "../constants/ApiKey";

const VideoPage = () => {
  const router = useRouter();

  const onSearchClick = useCallback(() => {
    router.push("/search-results");
  }, [router]);

  let [video, setVideo] = useState({})
  
 
  let [relatedVideos, setRelatedVideos] = useState([])
  const getResults = useCallback(async () =>{
    const state  = router.query;
    if (state?.id) {
      const getlogo = async (channel_id) => {
        var URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=${channel_id}&key=${REACT_APP_API_KEY}`;
        const res = await fetch(URL, {
          method: "GET",
          headers: {},
        });
        const logodata = await res.json();
        let logo = logodata.items[0].snippet.thumbnails.default.url;
        return logo;
      };

      const videoInfo = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${state.id}&key=${REACT_APP_API_KEY}&part=snippet,statistics`, {
        method: "GET",
      }).then(async res => await res.json());
      let videoChannelLogo = await getlogo(videoInfo.items[0].snippet.channelId)


      setVideo({
        ...videoInfo.items[0],
        logo: videoChannelLogo
      })
      console.log(videoInfo.items)
      let related_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&channelId=${videoInfo.items[0].snippet.channelId}&type=video&key=${REACT_APP_API_KEY}`;
      console.log(related_url)
      const result = await fetch(related_url, {
        method: "GET",
      }).then(async res => await res.json());


      let v = result?.items;
      v = v.map(async item => {
        item.logo = await getlogo(item.snippet.channelId)
        return item
      })

      let finalList = await Promise.all(v).then((res) => {
        console.log(res)
        return res
      })


      setRelatedVideos(finalList)
    }
  }, [router])
  useEffect(() => {
    getResults();

  }, [router])

  const handleVideoClick = useCallback((id) => {
    console.log(id)
    router.push({
      pathname: '/video-page',
      query: { 
        id
      },
    });
  }, []) 

  return (
    <div className={styles.videoPage}>
      <YTSearchBar
        onSearchClick={onSearchClick}
        svg="/svg.svg"
        svg1="/svg1.svg"
        svg2="/svg2.svg"
        divvoiceSearchButton="/divvoicesearchbutton.svg"
        vector="/vector.svg"
        ytIconButton="/yticonbutton.svg"
        svg3="/svg3.svg"
      />
      <div className={styles.divcolumns}>
        <div className={styles.divprimaryInner}>
          <div className={styles.youtubePlayerContainer}>
            <iframe
              className={styles.youtubeVideoPlayer}
              src={`https://www.youtube.com/embed/${video?.id}?rel=0`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className={styles.divbelow}>
            <div className={styles.divaboveTheFold}>
              <div className={styles.divtitle}>
                <div className={styles.locofyQuickBuilds}>
                  {video?.snippet?.title}
                </div>
                <div className={styles.figmaDesignTo}>
                  {video?.snippet?.title}
                </div>
              </div>
              <div className={styles.divtopRow}>
                <div className={styles.divowner}>
                  <div className={styles.ytdVideoOwnerRenderer}>
                    <img
                      className={styles.ytImgShadowIcon}
                      alt=""
                      src={video?.logo}
                    />
                    <div className={styles.divuploadInfo}>
                      <div className={styles.ytFormattedString}>
                        <div className={styles.a}>
                          <div className={styles.locofy}>{video?.snippet?.channelTitle}</div>
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
                    <div className={styles.ytdSegmentedLikeDislikeBut}>
                      <div className={styles.ytdToggleButtonRenderer}>
                        <button className={styles.likeThisVideoAlongWith169}>
                          <img
                            className={styles.svgIcon}
                            alt=""
                            src="/svg20.svg"
                          />
                          <div className={styles.div1}>{video?.statistics?.likeCount}</div>
                        </button>
                      </div>
                      <div className={styles.likeThisVideoAlongWith1691} />
                      <img
                        className={styles.dislikeThisVideo}
                        alt=""
                        src="/dislike-this-video.svg"
                      />
                    </div>
                    <div className={styles.ytdButtonRenderer}>
                      <div className={styles.share}>
                        <img
                          className={styles.svgIcon}
                          alt=""
                          src="/svg21.svg"
                        />
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
                  <div className={styles.kViews3}>{(video?.statistics?.viewCount > 1000000 ? Math.ceil(video?.statistics?.viewCount / 1000000) + 'M' : video?.statistics?.viewCount)} views • {video?.snippet?.publishedAt ? formatDistance(new Date(video?.snippet?.publishedAt), new Date(), { addSuffix: true }) : null}
</div>
                  <div className={styles.inThisVideoContainer}>
                    <p className={styles.inThisVideo}>
                      <span>{video?.snippet?.description?.substring(0, 250)}...</span>
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
          {relatedVideos.length > 0 ? relatedVideos.map(video => (
          <div className={styles.ytdCompactVideoRenderer} style={{cursor: "pointer"}} onClick={() => {
            handleVideoClick(video.id.videoId)
          }}>
            <div className={styles.divdismissible}>
              <div className={styles.athumbnail} style={{backgroundImage: `url(${video.snippet.thumbnails.medium.url})`}}>
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
                      {video?.snippet?.title?.length > 50 ? video?.snippet?.title.substring(0, 50) + '...' : video.snippet.title}
                      </div>
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.divbylineContainer}>
                        <div className={styles.ytFormattedString1}>
                          <div className={styles.locofy1}>{video.snippet.channelTitle}</div>
                        </div>
                      </div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.kViews}>
                          2.5K views • {video?.snippet?.publishedAt ? formatDistance(new Date(video?.snippet?.publishedAt), new Date(), { addSuffix: true }) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )) : <div>Loading...</div> }
        </div>
        
      </div>
    </div>
  );
};

export default VideoPage;
