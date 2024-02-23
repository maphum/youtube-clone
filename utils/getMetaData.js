import { REACT_APP_API_KEY } from "../constants/ApiKey";

// Utility function to fetch logo URL
const fetchLogo = async (channelId) => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=${channelId}&key=${REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items[0].snippet.thumbnails.default.url;
};

// Enhance list with logo URLs
export const listWithLogos = async (result) => {
    const videos = result?.items ?? [];
    const enhancedVideos = videos.map(async (item) => {
        const logo = await fetchLogo(item.snippet.channelId);
        return { ...item, logo };
    });
    return Promise.all(enhancedVideos);
};

// Enhance video list with statistics
export const listWithStatistics = async (videoList) => {
    const videosId = videoList.map(item => item?.id?.videoId).filter(id => id).join(',');
    const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videosId}&key=${REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    return videoList.map((item, i) => ({
        ...item,
        statistics: data.items[i]?.statistics,
    }));
};
