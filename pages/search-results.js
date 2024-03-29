import { useCallback, useState, useEffect } from "react";
import YTSearchBar from "../components/y-t-search-bar";
import Divsections from "../components/divsections";
import { useRouter } from "next/router";
import styles from "./search-results.module.css";
import { listWithLogos, listWithStatistics } from "../utils/getMetaData";
import { formatDistance } from "date-fns";
import { REACT_APP_API_KEY } from "../constants/ApiKey";
const SearchResults = () => {
  const router = useRouter();
  const [videos, setVideos] = useState([])


  async function getResults(youtube_search) {
    const results = await fetch(youtube_search, {
      method: "GET",
    }).then(res => res.json());
    let v = await listWithLogos(results)
    v = await listWithStatistics(v)
    setVideos(v)

    console.log(v)
  }


  useEffect(() => {
    if (router.query.searchTerm) {
      let youtube_search = `https://www.googleapis.com/youtube/v3/search?key=${REACT_APP_API_KEY}&q=${router.query.searchTerm}&type=video&part=snippet&maxResults=12`;

      getResults(youtube_search)

    
    }
  }, [router])
  function handleSearchClick(searchValue) {
    let youtube_search = `https://www.googleapis.com/youtube/v3/search?key=${REACT_APP_API_KEY}&q=${searchValue}&type=video&part=snippet&maxResults=12`;
    getResults(youtube_search)

  }
  function handleVideoClick(id) {
    router.push({
      pathname: '/video-page',
      query: { 
        id
      },
    });
  }
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
            {videos.length > 0 ? videos.map(video => (
              <div key={video?.id?.videoId || video?.id} 
              onClick={() => handleVideoClick(video?.id?.videoId)}
                  className={styles.ytdVideoRenderer}>
                <img
                  className={styles.athumbnailIcon}
                  alt=""
                  src={video?.snippet?.thumbnails?.high?.url || "/athumbnail1@2x.png"}
                />
                <div className={styles.div2}>
                  <div className={styles.divmeta}>
                    <div className={styles.figmaDesignTo}>
                      {video?.snippet?.title || "Figma Design to Live Website with Locofy.ai"}
                    </div>
                    <div className={styles.divmetadataLine}>
                      <div className={styles.kViews}>
                        {video?.statistics?.viewCount > 1000 ? Math.ceil(video?.statistics?.viewCount / 1000) + 'K' : video?.statistics?.viewCount || "6.3K"} views
                      </div>
                      <div className={styles.kViews}>
                        • {video?.snippet?.publishedAt ? formatDistance(new Date(video?.snippet?.publishedAt), new Date(), { addSuffix: true }) : "3 months ago"}
                      </div>
                    </div>
                  </div>
                  <div className={styles.divchannelInfo}>
                    <img
                      className={styles.ytImgShadowIcon}
                      alt=""
                      src={video?.logo || "/ytimgshadow1@2x.png"}
                    />
                    <div className={styles.kViews}>{video?.snippet?.channelTitle || "Locofy"}</div>
                  </div>
                  <div className={styles.inThisVideoContainer}>
                    <span>{video?.snippet?.description || `In this video you'll be learning how to go from a popular Figma design template to a Live Website using Locofy.ai! With Locofy.ai ...`}</span>
                  </div>
                </div>
              </div>
            )) : <div>Loading...</div>}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
