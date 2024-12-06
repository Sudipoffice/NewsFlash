import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const TrendingNews = () => {
  const [nytNews, setNytNews] = useState([]);
  const [newsApi, setNewsApi] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nytApiKey = import.meta.env.VITE_NYT_MP_APIKEY;
  const newsApiKey = import.meta.env.VITE_NYT_TOP3_API_KEY;

  // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${nytApiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          const chunkedData = Array.from({ length: 2 }, (_, i) =>
            data.results.slice(i * 10, i * 10 + 10)
          );
          setNytNews(chunkedData);
        }
      })
      .catch((err) => {
        console.log(err, "Error fetching data");
      });
  }, [nytApiKey]);



  useEffect(()=>{
    fetch(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${newsApiKey}`)
    .then((res)=> res.json())
    .then((data)=> {
      if (data.results) {
             const filteredData =  data.results.filter(item => item.multimedia !== null);
                    const chunkedData = Array.from({ length: 2 }, (_, i) =>
                      filteredData.slice(i * 10, i * 10 + 10)
                    );
                    setNewsApi(chunkedData);
                  }
    })
     .catch((err) => console.error("Error fetching data:", err));
  },[newsApiKey])

  useEffect(() => {
    if(newsApi.length){
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsApi[0].length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [newsApi]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex+1) % newsApi[0].length)
  }
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex-1+newsApi[0].length) % newsApi[0].length) 
  }


   if (!newsApi.length || !nytNews.length) {
    return (<div
      className="w-screen  min-h-full flex flex-col justify-center items-center py-2 md:py-24"
    ><header
        className="text-xl md:text-7xl font-bold text-black"
        style={{ fontFamily: "Uncial Antiqua" }}
      >TRENDING NEWS
      </header>
    <Shimmer/>
    </div>);
  }

  return (
    <div
      id="trending-news"
      className="w-screen  min-h-screen flex flex-col justify-center items-center py-2 md:py-24"
    >
      {/* w-fit */}
      <header
        className="text-xl md:text-7xl font-bold text-black"
        style={{ fontFamily: "Uncial Antiqua" }}
      >
        {" "}
        TRENDING NEWS
      </header>

      <div className='flex flex-col gap-8'>

      {/* News Banner NYT Top US */}
      <div className="relative w-full h-full overflow-x-hidden" >
          <div className='flex flex-row pt-2 md:pt-8 pb-[40%] md:pb-0 transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {newsApi[0].map((news) => {
            return <section key={news.title} className=' flex flex-col aspect-video items-center pb-[5vw] relative min-w-full  duration-700 ease-in-out' >
            <img className='aspect-18/9 w-screen object-cover' src={ news?.multimedia[0].url} alt={news.title} />
            <div className=' flex flex-col gap-0 md:gap-4 text-center items-center px-1 md:px-4 py-2 md:py-8 w-3/4 md:w-1/4 h-fit absolute left-[12%] md:left-[5%] top-[75%] md:top-[25%] z-10  bg-gray-950  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border-double border-4 border-gray-100 text-white'>
              <h1 className='text-sm md:text-3xl font-bold '>{news.title}</h1>
              <p className='text-xs md:text-xl'>{news.abstract}</p>
                  <Link to="/detailedNews" state={{...news, source:"NYT"}}>
                    <button className="text-[0.6rem] md:text-base text-gray-200 hover:text-gray-400">
                      Read More...
                    </button>
                  </Link>
            </div>
          </section>
          })} 
          </div>
          {/* Button */}
        <button onClick={handlePrev} aria-label="Previous Slide" type="button" className="absolute top-[20%] md:top-[50%] left-[1%] z-30 px-4 cursor-pointer group focus:outline-none" >
          <i className="bi bi-arrow-left-circle-fill text-xl md:text-4xl bg-gradient-to-br from-lime-300 to-sky-400 bg-clip-text text-transparent hover:text-gray-500"></i>
        </button>
        <button onClick={handleNext} aria-label="Next Slide" type="button" className="absolute top-[20%] md:top-[50%] right-[1%] z-30 px-4 cursor-pointer group focus:outline-none" >
          <i className="bi bi-arrow-right-circle-fill text-xl md:text-4xl bg-gradient-to-br from-lime-300 to-sky-400 bg-clip-text text-transparent hover:text-gray-500"></i>
        </button>
          </div>

{/* REST section */}
      <section className="grid grid-cols-2 md:grid-cols-3 place-items-center items-start   w-screen px-1 md:px-1 gap-1 md:gap-2">
        {/* 1st small thumbnail col using NYT Api */}
        <div className="flex flex-col w-4/5 divide-solid divide-y-[1.5px] md:divide-y-2 divide-gray-300">
          {nytNews[0]?.map((news) => {
            const mediaUrl = news.media?.[0]?.["media-metadata"]?.[2]?.url;

            return (
              <div
                key={news.id}
                className="flex flex-col items-center text-center gap-1 md:gap-4 py-2 md:py-8"
              >
                {mediaUrl && <img src={mediaUrl} alt={news.title} />}
                <h1 className="text-sm md:text-lg font-semibold">{news.title}</h1>
                <p className="text-xs md:text-base">{news.abstract}</p>
              </div>
            );
          })}
        </div>

        {/* 2nd mid thumbnail col using News Api */}
        <div className="flex flex-col justify-start md:justify-center items-center w-full divide-solid divide-y-[1.5px] md:divide-y-2 divide-gray-300">
          {newsApi[1]?.map((news, index) => {
            return (
                <div key={index} className="flex flex-col gap-1 md:gap-3 w-full  py-2 md:py-8">
                  <img
                    className="aspect-3/2  "
                    src={news.multimedia[0]?.url}
                    alt={news.title}
                  />
                  <h1 className="text-sm md:text-2xl  font-semibold">{news.title}</h1>
                  <p className="text-xs md:text-lg">{news.abstract}</p>
                </div>
            );
          })}
        </div>

        {/* 3rd small thumbnail col using NYT Api */}
        <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 w-full md:w-4/5 divide-solid divide-y-[1.5px] md:divide-y-2 divide-gray-300">
          {nytNews[1]?.map((news) => {
            const mediaUrl = news.media?.[0]?.["media-metadata"]?.[2]?.url;

            return (
              <div
                key={news.id}
                className="flex flex-col items-center text-center gap-1 md:gap-4 mx-2 md:mx-0 py-2 md:py-8"
              >
                {mediaUrl && <img src={mediaUrl} alt={news.title} />}
                <h1 className="text-sm md:text-lg font-semibold">{news.title}</h1>
                <p className="text-xs md:text-base">{news.abstract}</p>
              </div>
            );
          })}
        </div>
      </section>
      </div>
    </div>

  );
};

export default TrendingNews;
