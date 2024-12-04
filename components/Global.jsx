import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Global = () => {
  const apiKey = import.meta.env.VITE_NYT_TOP2_API_KEY;
  const [globalNews, setGlobalNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          const filteredArticles = data.results.filter(
            (article) =>
              Array.isArray(article.multimedia) && article.multimedia[0]?.url
          );
          const chunkedData = Array.from({ length: 2 }, (_, i) =>
            filteredArticles.slice(i * 15, i * 15 + 15)
          );
          setGlobalNews(chunkedData);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [apiKey]);

  useEffect(() => {
    if (globalNews[1]?.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % globalNews[1].length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [globalNews]);

  const handleNext = () => {
    if (globalNews[1]?.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % globalNews[1].length);
    }
  };
  const handlePrev = () => {
    if (globalNews[1]?.length > 0) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + globalNews[1].length) % globalNews[1].length
      );
    }
  };
  if (globalNews.length === 0)
    return (
      <div
        id="global"
        className="min-h-screen flex flex-col py-2 md:py-24 px-2 md:px-8 gap-2 md:gap-8 justify-center items-center"
      >
        <header
          className="text-xl md:text-5xl uppercase "
          style={{ fontFamily: "Uncial Antiqua" }}
        >
          Global News
        </header>
        <Shimmer />{" "}
      </div>
    );

  return (
    <div
      id="global"
      className="min-h-screen flex flex-col py-2 md:py-24 px-2 md:px-8 gap-2 md:gap-8 justify-center items-center"
    >
      <header
        className="text-xl md:text-5xl uppercase "
        style={{ fontFamily: "Uncial Antiqua" }}
      >
        Global News
      </header>

      {/* News Banner */}
      <section className="w-full md:w-5/6 h-full overflow-x-hidden">
        <div
          className="flex flex-row relative  transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {globalNews[1]?.map((news) => {
            return (
              <div
                key={news.title}
                className="flex flex-col aspect-video items-center relative min-w-full  duration-700 ease-in-out"
              >
                <img
                  className="aspect-5/3"
                  src={news.multimedia[0].url}
                  alt={news.title}
                />
                <div className="absolute w-full h-full md:h-fit flex flex-col justify-end py-2 md:py-8 px-0.5 md:px-20 bottom-0 text-white  bg-gradient-to-t from-[#000000d3] to-[#00000000] ">
                  <h1
                    className="text-md md:text-4xl w-full md:w-3/4 "
                    style={{ fontFamily: "Anton" }}
                  >
                    {news.title}
                  </h1>
                  <Link to="/detailedNews" state={{ ...news, source: "NYT" }}>
                    <p className="text-[0.6rem] md:text-lg hover:text-gray-200 cursor-pointer">
                      Read More...
                    </p>
                  </Link>
                  <div
                    className="flex flex-row gap-10 text-[0.6rem] md:text-lg"
                    style={{ fontFamily: "Antonio" }}
                  >
                    <p className="">{news.byline}</p>
                    <p className="">{news.published_date.slice(0, 10)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Button */}
        <button
          onClick={handlePrev}
          type="button"
          className="absolute top-[20%] md:top-[50%] left-0 md:left-[1%] z-30 px-4 cursor-pointer group focus:outline-none"
        >
          <i className="bi bi-arrow-left-circle-fill text-xl md:text-4xl bg-gradient-to-br from-lime-300 to-sky-400 bg-clip-text text-transparent hover:text-gray-700"></i>
        </button>
        <button
          onClick={handleNext}
          type="button"
          className="absolute top-[20%] md:top-[50%] right-0 md:right-[1%] z-30 px-4 cursor-pointer group focus:outline-none"
        >
          <i className="bi bi-arrow-right-circle-fill text-xl md:text-4xl bg-gradient-to-br from-lime-300 to-sky-400 bg-clip-text text-transparent hover:text-gray-700"></i>
        </button>
      </section>

      <section className="px-0.5 md:px-12 grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-2 md:gap-8 pb-0 md:pb-4 ">
        {globalNews[0]?.map((news) => {
          return (
            <div key={news.title} className="mx-0 md:mx-8 flex flex-col gap-1 py-1 md:py-2">
              <img
                className="aspect-5/3"
                src={news?.multimedia[0].url}
                alt={news.title}
              />
              <h1
                className="text-xs md:text-lg font-bold"
                style={{ fontFamily: "Young Serif" }}
              >
                {news.title}
              </h1>
              <Link to="/detailedNews" state={{ ...news, source: "NYT" }}>
                <p className="text-[0.6rem] md:text-sm hover:text-gray-400 cursor-pointer">
                  Read More...
                </p>
              </Link>
              <p className="text-[0.6rem] md:text-xs text-start md:text-end" style={{ fontFamily: "Antonio" }}>
                {news.byline}
              </p>
              <p className="text-md">{news.description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Global;
