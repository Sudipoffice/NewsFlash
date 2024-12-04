import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom';

const Local = () => {
  const [newsDataNews, setNewsDataNews] = useState([])
  const newsDataApiKey = import.meta.env.VITE_NEWSDATA_API_KEY
  const gnewsApiKey = import.meta.env.VITE_GNEWS_API_KEY2 
  const worldNewsApiKey = import.meta.env.VITE_WORLDNEWS_API_KEY
  const [gNews, setGNews] = useState([])
  const [worldNews, setWorldNews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0)

// Scroll to the top of the page
useEffect(() => {
  window.scrollTo(0, 0); 
}, []);

  useEffect(() => {
    fetch(
      `https://api.worldnewsapi.com/top-news?source-country=in&language=en&api-key=${worldNewsApiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.top_news[0].news[0].image)
        const firstNewsItems = data.top_news.map((item) => item.news[0]); 
        const filteredArticles = firstNewsItems.filter((article) => article.image);
          setWorldNews(filteredArticles);
        })
        // console.log(worldNews)
  }, [ worldNewsApiKey ]);

  useEffect(()=>{
    fetch(`https://newsdata.io/api/1/news?apikey=${newsDataApiKey}&country=in&language=en`)
    .then((res) => res.json())
    .then((data) => {
      setNewsDataNews(data.results)
    })
  },[newsDataApiKey])

useEffect(()=>{
    fetch(`https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=50&apikey=${gnewsApiKey}`)
    .then((res) => res.json())
    .then((data) => {
      setGNews(data.articles)
    })
  },[gnewsApiKey ])

 



  useEffect(()=>{
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex+1) % worldNews.length)
    }, 6000);
    return () => clearInterval(interval)
  },[worldNews])

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex+1) % worldNews.length)
  }
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex-1+worldNews.length) % worldNews.length) 
  }

  if(!newsDataNews.length || !gNews.length){
    return (<div id="local" className='h-fit flex flex-col py-2 md:py-28 px-2 md:px-12 gap-2 md:gap-8 justify-center items-center'>
              <header className='text-lg md:text-5xl uppercase' style={{fontFamily: "Uncial Antiqua"}}>Local News</header>
              <Shimmer/>
              </div>)
  }



  return (
    <div id="local" className='h-fit flex flex-col py-2 md:py-28 px-2 md:px-12 gap-2 md:gap-8 justify-center items-center'>
    <header className='text-lg md:text-5xl uppercase' style={{fontFamily: "Uncial Antiqua"}}>Local News</header>
    
      <div className='flex flex-col gap-4 md:gap-28'>
     {/* Banner */}
          <div className="relative w-screen h-full overflow-x-hidden pb-[50%] md:pb-0" >
          <div className='flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {worldNews.map((news) => {
            return  <section key={news.title} className=' flex flex-col h-full aspect-video items-center pb-0 md:pb-[5vw] relative min-w-full  duration-700 ease-in-out' >
            <img className='aspect-18/9 w-5/6 object-cover' src={news.image} alt={news.title} />
            <div className=' flex flex-col gap-1 md:gap-4 text-center items-center w-5/6 md:w-3/6 p-4 absolute bottom-[-60%] md:bottom-0  bg-gray-950  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border-double border-4 border-gray-100 text-white'>
              <h1 className='text-sm md:text-3xl font-bold ' style={{fontFamily: "Young Serif"}}>{news.title}</h1>
              <Link to="/detailedNews" state={{...news, source:"World"}}>
                    <button className="text-[0.6rem] md:text-base text-gray-200 hover:text-gray-400">
                      Read More...
                    </button>
                  </Link>
            </div>
          </section>
          })} 
          </div>
          {/* Button */}
          {worldNews.length? <>
        <button onClick={handlePrev} type="button" className="absolute top-[30%] md:top-[50%] left-1 md:left-[5%] z-30 px-4 cursor-pointer group focus:outline-none" >
          <i className="bi bi-arrow-left-circle-fill text-xl md:text-4xl bg-gradient-to-br from-lime-300 to-sky-400 bg-clip-text text-transparent hover:text-gray-700"></i>
        </button>
        <button onClick={handleNext} type="button" className="absolute top-[30%] md:top-[50%] right-1 md:right-[5%] z-30 px-4 cursor-pointer group focus:outline-none" >
          <i className="bi bi-arrow-right-circle-fill text-xl md:text-4xl bg-gradient-to-br from-lime-300 to-sky-400 bg-clip-text text-transparent hover:text-gray-700"></i>
        </button>
            </> : null}
          </div>


        <section className=' px-0 md:px-12 grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-1 md:gap-8 pt-2 md:pt-4'>
       {newsDataNews.map((news)=> {
        return news.image_url &&<div key={news.title} className='mx-0 md:mx-8 flex flex-col gap-1 '>
          <img className='aspect-5/3' src={news.image_url} alt={news.title} />
          <h1 className='text-xs md:text-lg font-bold' style={{fontFamily: "Young Serif"}}>{news.title}</h1>
          <p className='text-[0.6rem] md:text-sm text-end' style={{fontFamily: "Antonio"}}>{news.source_name}</p>
          <p className='text-[0.6rem] md:text-base'>{news.description?.slice(0,100)}...</p>
       </div>
       })}
        </section>
        <section className='px-0 md:px-12 grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-1 md:gap-8 pb-2 md:pb-4'>
       {gNews.map((news)=> {
        return news?.image &&<div key={news.title} className='mx-0 md:mx-8 flex flex-col gap-1 '>
          <img className='aspect-5/3' src={news?.image} alt={news.title} />
          <h1 className='text-xs md:text-lg font-bold' style={{fontFamily: "Young Serif"}}>{news.title}</h1>
          <p className='text-[0.6rem] md:text-sm text-end' style={{fontFamily: "Antonio"}}>{news.source.name}</p>
          <p className='text-[0.6rem] md:text-base'>{news.description}</p>
       </div>
       })}
        </section>

      </div>
        
    </div>
  )
}

export default Local
