import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Shimmer from '../Shimmer'

const CategoriesPageLayout = ({categoryName, category}) =>{

  const [firstNews, setFirstNews] = useState(null)
  const [secondNews, setSecondNews] = useState(null)
  const [generalNews, setGeneralNews] = useState([])
  const apiKey = import.meta.env.VITE_NYT_API_KEY
  const apiKey2 = import.meta.env.VITE_NYT_TOP2_API_KEY

  //  Scroll to the top of the page
   useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  useEffect(()=>{
    fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey || apiKey2}`)
    .then((res)=> res.json())
    .then((data)=> {
           const filteredData =  data.results.filter(item => item.multimedia !== null);
      const [first, second, ...rest] = filteredData;
      setFirstNews(first)
      setSecondNews(second)
      setGeneralNews(rest)
      // console.log(firstNews)
    })
     .catch((err) => console.error("Error fetching data:", err));
  },[apiKey])

  if (!firstNews) {
    return <div className='pt-24 md:pt-20'>
    <Shimmer/>

    </div>
      
  }
  const categoryColors = {
    General: "#BEF264",
    Technology: "#7DD3FC",
    Sports: "#A5B4FC",
    Health: "#FDA4AF",
    Business: "#FBBF24",
    Entertainment: "#D4D4D8",
    Science: "#FCD34D",
    Fashion: "#F1F5F9",
    Food: "#F0ABFC",
    Politics: "#A7F3D0"
  };


  return (
    <div
      id="categories-business"
      className=" w-screen h-full py-24 md:py-16 px-2 md:px-12 flex flex-col gap-24 md:gap-40"
    >
      {/* Banner News */}
      <section className=" flex flex-col items-center relative">
        <button
          className="px-1 md:px-4 py-1 md:py-2 rounded-full  text-sm md:text-xl absolute left-[12%] top-[5%]"
          style={{ fontFamily: "Lobster Two", backgroundColor: categoryColors[categoryName] || "#BEF264"  }}
        >
          {categoryName}
        </button>
        <img
          className="aspect-5/3 w-full md:w-5/6"
          src={firstNews.multimedia[0].url}
          alt={firstNews.title}
        />

        <div className="flex flex-col justify-start items-start gap-2 md:gap-6 p-2 md:p-10 h-fit absolute bottom-[-40%] md:bottom-[-5%] bg-white text-wrap w-4/5 md:w-3/6">
          <div
            className="flex flex-row gap-1 md:gap-4 text-xs md:text-lg"
            style={{ fontFamily: "Antonio" }}
          >
            <p className="">{firstNews.byline}</p> --
            <p className="">{firstNews.published_date.slice(0,10)}</p>
          </div>
          <div className="gap-0">
            <h1 className="text-sm md:text-4xl" style={{ fontFamily: "Anton" }}>
             {firstNews.title}
            </h1>
            <Link to="/detailedCategoriesNews" state={firstNews}>
            <button className="text-xs md:text-lg text-gray-500 hover:text-gray-700">
              Read More...
            </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Rest of the Page */}
      <section className="flex flex-col px-0 md:px-20 gap-4 md:gap-8 justify-center text-start items-center">
        <h1
          className="text-2xl md:text-5xl font-bold"
          style={{ fontFamily: "Antonio" }}
        >
          {categoryName}
        </h1>
        {/* Mid size news component */}
        <div className="flex flex-row justify-center items-center w-full md:w-3/4">
          <div className="flex flex-col-reverse md:flex-col w-2/6 md:w-3/6 items-start gap-1 md:gap-4">
            <div
              className="flex flex-col-reverse md:flex-row gap-0 md:gap-4 text-[0.6rem] md:text-lg"
              style={{ fontFamily: "Antonio" }}
            >
              <p className="">{secondNews.byline}</p> --
              <p className="">{secondNews.published_date.slice(0,10)}</p>
            </div>
            <div className=''>
            <h1 className="text-sm md:text-4xl w-full md:w-4/5" style={{ fontFamily: "Anton" }}>
              {secondNews.title}
            </h1>
            <Link to="/detailedCategoriesNews" state={secondNews}>
            <button className="text-gray-500 hover:text-gray-700 text-sm md:text-xl ">
            <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
            </Link>
            </div>
          </div>
          <img
            className="aspect-5/3 w-4/6 md:w-3/6"
            src={secondNews.multimedia[0]?.url}
            alt={secondNews.title}
          />
        </div>
        {/* Small news components */}
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 py-2 md:py-12">
          {generalNews.map((news) => {
            return (
              <div key={news.title} className=" flex flex-col justify-center items-center h-fit gap-1 md:gap-4 px-0.5 md:px-0 py-2 md:py-8">
                <img
                  className="aspect-5/3  w-full md:w-4/6"
                  src={news.multimedia[0].url}
                  alt={news.title}
                />

                <div className="flex flex-col w-full md:w-4/6 items-start gap-0 md:gap-2">
                  <div
                    className="flex flex-col text-[0.6rem] md:text-md"
                    style={{ fontFamily: "Antonio" }}
                  >
                    <p className="">{news.published_date.slice(0,10)}</p>
                    <p className="">{news.byline}</p>
                  </div>
                  <h1 className="text-sm md:text-xl w-4/5" style={{ fontFamily: "Anton" }}>
                  {news.title}
                  </h1>
                  <Link to="/detailedCategoriesNews" state={news}>
                  <button className="text-gray-500 hover:text-gray-700 text-sm md:text-xl">
                  <i className="bi bi-arrow-right-circle-fill"></i>
                  </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default CategoriesPageLayout
