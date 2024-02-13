export const listWithLogos = async (result) => {
    const fetchLogo = async (channel_id) => {
        var URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=${channel_id}&key=${"AIzaSyAajxxoLEMtwC2P3_b-Xm94GlP0HMgGMoI"}`;
        const res = await fetch(URL, {
            method: "GET", 
            headers: {},
        });
        const logodata = await res.json();
        let logo = logodata.items[0].snippet.thumbnails.default.url;
        return logo;
    };
    let v = result?.items;
    v = v.map(async item => {
        item.logo = await fetchLogo(item.snippet.channelId)
        return item
    })

    let finalList = await Promise.all(v).then((res) => {
        
        return res
    })
    return finalList
}
export const listWithStatistics = async (videoList) => {

    let initValue = ''
    const videosId = videoList.reduce(
        ((accumulator, currentValue) => {
            console.log(currentValue)
            if (accumulator)
                return accumulator + ',' + currentValue?.id?.videoId
            else return currentValue?.id?.videoId
        }),
        initValue
    );
    let r = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videosId}&key=${"AIzaSyAajxxoLEMtwC2P3_b-Xm94GlP0HMgGMoI"}`).then(res => res.json())
    
    videoList = videoList.map((item, i) => {
        item.statistics = r.items[i].statistics
        return item
    })
    
    return videoList
}