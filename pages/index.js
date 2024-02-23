"use client"

import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";
import YTSearchBar from "../components/y-t-search-bar";
import YTGuideSection from "../components/y-t-guide-section";
import { formatDistance } from 'date-fns'
import styles from "./index.module.css";
import { REACT_APP_API_KEY } from "../constants/ApiKey";
import Divsections from "../components/divsections";
const Homepage = () => {
  const router = useRouter();

  const onSearchClick = useCallback(() => {
    router.push("/search-results");
  }, [router]);

  const onYtdCardContainerClick = useCallback(() => {
    router.push("/video-page");
  }, [router]);
  
  function handleVideoClick(id) {
    console.log(id)
    router.push({
      pathname: '/video-page',
      query: { 
        id
      },
    });
  }

  const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchVideos() {

      let Recommended = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=12&regionCode=GB&key=${REACT_APP_API_KEY}`).then(res => res.json());


      const getlogo = async (channel_id) => {
        var URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channel_id}&key=${REACT_APP_API_KEY}`;
        const res = await fetch(URL, {
          method: "GET", //Method of https request
          headers: {},
        });
        const logodata = await res.json();
        let logo = logodata.items[0].snippet.thumbnails.high.url;
        console.log(logo)
        return logo;
      };
      let v = Recommended?.items;
      v = v.map(async item => {
        item.logo = await getlogo(item.snippet.channelId)
        return item
      })

      let finalList = await Promise.all(v).then((res) => {
        console.log(res)
        return res
      })

      setVideos(chunkArrayInGroups(finalList, 4))
    }

    fetchVideos();

  }, [])

  
  function chunkArrayInGroups(arr, size) {
    var myArray = [];
    for (var i = 0; i < arr.length; i += size) {
      myArray.push(arr.slice(i, i + size));
    }
    return myArray;
  }

  return (
    <div className={styles.homepage}>
      <YTSearchBar
        onSearchClick={onSearchClick}
        svg="/svg.svg"
        svg1="/svg1.svg"
        divcontainerColor="black"
        svg2="/svg2.svg"
        divvoiceSearchButton="/divvoicesearchbutton.svg"
        vector="/vector.svg"
        ytIconButton="/yticonbutton.svg"
        svg3="/svg3.svg"
      />
      <div className={styles.ytdBody}>
        <Divsections />
        <div className={styles.ytdRichGridRenderer}>
          <div className={styles.ironSelector}>
            <div className={styles.ytChipCloudChipRenderer}>
              <div className={styles.ytFormattedString}>
                <div className={styles.all}>All</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer1}>
              <div className={styles.ytFormattedString1}>
                <div className={styles.live}>Live</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer2}>
              <div className={styles.ytFormattedString2}>
                <div className={styles.gaming}>Gaming</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer3}>
              <div className={styles.ytFormattedString3}>
                <div className={styles.laughter}>Laughter</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer4}>
              <div className={styles.ytFormattedString4}>
                <div className={styles.gadgets}>Gadgets</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer5}>
              <div className={styles.ytFormattedString5}>
                <div className={styles.tools}>Tools</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer6}>
              <div className={styles.ytFormattedString6}>
                <div className={styles.quarterbacks}>Quarterbacks</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer7}>
              <div className={styles.ytFormattedString7}>
                <div className={styles.comedy}>Comedy</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer8}>
              <div className={styles.ytFormattedString8}>
                <div className={styles.characters}>Characters</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer9}>
              <div className={styles.ytFormattedString9}>
                <div className={styles.backgroundMusic}>Background music</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer10}>
              <div className={styles.ytFormattedString10}>
                <div className={styles.driving}>Driving</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer11}>
              <div className={styles.ytFormattedString11}>
                <div className={styles.gameShows}>Game shows</div>
              </div>
            </div>
            <div className={styles.ytChipCloudChipRenderer12}>
              <div className={styles.ytFormattedString12}>
                <div className={styles.history}>History</div>
              </div>
            </div>
          </div>
          {videos?.length > 0 ? videos.map(groupVideos => {
                            return <div className={styles.divcontents}>
                              {groupVideos.map(video => <div className={styles.ytdCard} onClick={() => handleVideoClick(video?.id)}>
                <img
                  className={styles.ytdThumbnailIcon}
                  alt=""
                  src={video.snippet.thumbnails.high.url || "/ytdthumbnail@2x.png"}
                />
                <div className={styles.ytdDescription}>
                  <img
                    className={styles.zMnvfkkjr08efltsqqm53qn7x3gyIcon}
                    alt=""
                    src={video.logo || "/8zmnvfkkjr08efltsqqm5-3qn7x3gy0ffr0dy6mqscdddxj1zfwnumsa4i8gwtvpdqkwbds68ckc0x00ffffffnorj@2x.png"}
                  />
                  <div className={styles.divmeta}>
                    <div className={styles.coolestNewGadgets}>
                      {video.snippet.title}
                    </div>
                    <div className={styles.divmetadata}>
                      <div className={styles.techow}>{video.snippet.channelTitle}</div>
                      <div className={styles.divmetadataLine}>
                        <div className={styles.techow}>
                          {video.statistics.viewCount > 1000 ? `${Math.ceil(video.statistics.viewCount / 1000000)}M` : video.statistics.viewCount} views
                        </div>
                        <div className={styles.techow}>
                          • {formatDistance(new Date(video.snippet.publishedAt), new Date(), { addSuffix: true })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
              </div>
            }) : <div>Loading</div>
            }
          
        </div>
      </div>
    </div>
  );
};

export default Homepage;
