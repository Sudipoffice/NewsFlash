import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Video = () => {
  const [usNewsVideos, setUsNewsVideos] = useState([]);
  const apiKey1 = import.meta.env.VITE_APP_YOUTUBE_API_KEY;
  const apiKey2 = import.meta.env.VITE_APP_YOUTUBE_API_KEY2;

  // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=latest+news&type=video&regionCode=US&relevanceLanguage=en&maxResults=15&key=${ apiKey2}`)
    .then((res) => res.json())
    .then((data) =>{
      setUsNewsVideos(data.items)
    })
  },[ apiKey2])

  if(!usNewsVideos.length){
    return (<div id="video" className="min-h-fit w-screen flex flex-col px-2 md:px-12 py-2 md:py-28">
        <h1
          className="text-xl md:text-4xl text-center"
          style={{ fontFamily: "Lobster Two" }}
        >
          Latest Videos
        </h1>
        <Shimmer/>
        </div>
        )
  }

  return (
    <div id="video" className="min-h-fit w-screen flex flex-col px-2 md:px-12 py-2 md:py-28">
      {/* World */}
      <section className=" flex flex-col gap-4">
        <h1
          className="text-xl md:text-4xl text-center"
          style={{ fontFamily: "Lobster Two" }}
        >
          Latest Videos
        </h1>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 justify-center items-center gap-2 md:gap-8">
        {usNewsVideos.map((video)=>{
         return (
          <div key={video.title} className="flex flex-col h-fit gap-1 md:gap-2">
            <iframe
            className="aspect-5/3 "
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              allow="accelerometer; autoplay;  picture-in-picture"
              allowFullScreen
            ></iframe>

            <h1 className="text-xs md:text-xl text-black" style={{fontFamily: "Anton"}}>{video.snippet.title}</h1>
            <p className="text-[0.6rem] md:text-lg" style={{fontFamily: "Antonio"}}>{video.snippet.channelTitle}</p>
          </div>)
        })}
        </div>
        
      </section>

      {/* India */}
      {/* <section className="">
        <h1
          className="text-4xl text-start"
          style={{ fontFamily: "Lobster Two" }}
        >
          India
        </h1>
      </section> */}
    </div>
  );
};

export default Video;
